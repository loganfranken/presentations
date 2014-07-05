# Let's Share: A Financial Aid Case Study

A talk I gave at the 2013 University of California Computing Services Conference (UCCSC)
about a centralized financial aid estimation service developed at the
University of California, Santa Barbara.

## Background

### 2008 HEOA

The [2008 Higher Education Opportunity Act (HEOA)](http://www.ed.gov/heoa)
required that institutions
receiving federal Title IV financial aid funds create a "net price" calculator
on their website that would allow them to estimate the total cost of attending
a post-secondary school.

To comply with this regulation, each institution needed to host a net price
calculator on their website, using either
[a generator provided by the Department of Education](http://nces.ed.gov/ipeds/netpricecalculator/)
or develop their own calculator that meets the
[federal requirements](https://nces.ed.gov/ipeds/resource/net_price_calculator.asp#NPCRequirement).

### Department of Education's Template

With the [Department of Education's generator](http://nces.ed.gov/ipeds/netpricecalculator/),
a representative from an institution completes a form, providing values for the
estimated cost of attending a school for an academic year as well as the amount of grants and scholarships awarded to students.

This form generates a zip file with a single HTML file that contains the
JavaScript-powered calculator, which an institution could host on their
website.

While this is useful tool for a universities to quickly fulfill their regulatory
requirements, the generated calculator has a number of limitations,
including:

* Inaccurate results (both Federal and institutional calculations based on wide ranges)	
* Limited detail in results (limited cost of attendance and financial aid categories in results)

As well as technical issues, including:

* Non-semantic, non-accessible HTML (table-based layout, fields without labels)
* No separation of concerns (completely powered by JavaScript)
* Bloat (non-minified CSS and JavaScript)

### UC Berkeley's Net Price Calculator

Due to the limitations of the Department of Education generator, the
University of California schools decided to develop their own net price
calculators.

UC Berkeley was the first to develop a calculator: a custom-built ASP.NET
solution that included more accurate Federal and institutional calculations.
To help facilitate the other UCs in meeting their net price calculator
requirement, Berkeley distributed the source code for the calculator to the
other institutions.

As the other UCs added improvements to the calculator of fixed bugs, the
updated source code would get passed to the other UCs over e-mail. Over time
this became confusing as each UC had a slightly modified version of
Berkeley's original source code.

Furthermore, although Berkeley provided the original foundation, each
individual UC was spending time and effort developing improvements and bug
fixes to meet their needs. 

## Aid Estimator Service

Using Berkeley's original source code as the base, developers from the University of 
California, Santa Barbara began work on an aid estimation service.

Rather than each institution duplicating the common logic of financial aid
logic on their own website, an institution could simply host a "thin client"
form that would send inputs from a User to a service that would respond with
the results of the financial aid estimation.

The Aid Estimator service was launched in 2011 with five of the UCs consuming the service.

### How It Works

The Aid Estimator is a RESTful HTTP web service built with Windows Communication Foundation (WCF). To create a service client, a university simply needs to complete two steps:

1. Create an XML constants file
2. Create a form on their website

#### XML Constants File

Each institution that uses the service must fill out a XML constants form with details regarding their university's financial aid formulas. The constants are uploaded to the server, where the estimator reads in these constants and uses them to drive the estimation of financial aid.

#### Web Form

Each institution must also create a form on their website that can take in values provided by the User and transform the User-provided values into a URL to send in a GET request to the service (simplified for readability):

	/AidEstimatorService.svc/GetDependentStudentAidAward?parentAgi=65000&parentIncomeTax=12500&studentAgi=5000

The service responds with XML (simplified for readability):

	<AidEstimatorResponse>
		<AidEstimatorResults>
			<EfcProfile>
				<ExpectedFamilyContribution>8150</ExpectedFamilyContribution>
				<ParentContribution>7350</ParentContribution>
				<StudentContribution>800</StudentContribution>
			</EfcProfile>
			<GrantAward>
				<Maximum>14579</Maximum>
				<Minimum>15579</Minimum>
			</GrantAward>
		</AidEstimatorResults>
	</AidEstimatorResponse>

The client can then parse this XML and display it to the User who provided the values.

### How It's Built

The Aid Estimator is actually comprised of two pieces: an **Expected Family Contribution (EFC) Calculator** and an **Aid Estimator**.

#### EFC Calculator

**Expected Family Contribution (EFC)** is a value that results from a [publicly-documented Federal formula (PDF)](http://ifap.ed.gov/efcformulaguide/attachments/082511EFCFormulaGuide1213.pdf) that approximates how much a student and their parents should be able to contribute to their educational costs for an academic year. This value is used by financial aid offices to award financial aid to students.

The calculation of EFC is a separate component that is used by the Aid Estimator; this part of the service is actually hosted as its own service (```EfcCalculatorService.svc```) that can be used independently from the Aid Estimator service.

Originally, the Aid Estimator's EFC calculation was an approximation of the Federal calculation; the assets portion of the formula, for example, was replaced with a single User-reported value (```ParentAssets=9000```).

However, users of the service felt that this could lead to inaccurate results for Users with a large amount of assets, so the EFC calculation component was eventually updated to exactly mirror the Federal formula.

#### Aid Estimator

After calculating an EFC for the student, this value can then be used to **estimate financial aid**.

Originally, the aid estimator used a series of ranges to estimate financial aid: for example, there were several increasing ranges of grant values (0 - 1000, 1001 - 2000, etc.) and the estimator would select one of these ranges based on a corresponding EFC values set by each university.

However, this implementation of the service didn't fit the needs of the service's users. Many UCs with straightforward financial aid formulas were forced to create estimates based on the cumbersome range system.

To address these issues, a dynamic formula-parsing engine, powered by [NCalc](http://ncalc.codeplex.com/), was introduced. With this engine, universities could simply provide formulas instead of arbitrary ranges:

	<constant name="Dependent.GrantEquation">
		<value>Min([MaxGrant], Max(0, [CostOfAttendance] - [ExpectedFamilyContribution] - [SelfHelp]))</value>
	</constant>

### Current State

The Aid Estimator, which has been up and running for over three years, is now consumed by nine UC financial aid offices websites.

## Cross-Campus Development

### Solving Common Problems

The Aid Estimator is a prime example of the value of universities pooling resources to solve a common problem.

Universities often encounter problems that are highly specific to the context of higher education (and in this case, highly specific to the context of university financial aid offices). In these situations, there is a significant value in reaching out to our peers for help in a number of ways, including:

* Finding existing components that may already solve our problems
* Surveying for past experiences and lessons learned
* Identifying opportunities for collaboration

### Creating a Cross-Campus Team

One possible criticism of creating this service is the significant amount of development work that appears to be centralized to a single institution (in this case, UCSB).

However, this isn't accurate: the estimator was built on top of a foundation originally provided by Berkeley, was improved with suggestions from each campus, and was thoroughly bug-tested by all campuses consuming the service.

From this perspective, UCSB actually *gained* a cross-campus team of Business Analysts and Quality Assurance Specialists.

### Moving Beyond "Behind Closed Doors" Open-Source

In its current state, the logic powering the estimator (and access to the estimator service) is restricted to University of California campuses. This leads to a number of issues, including:

* Individual campuses are unable to test their formulas without first providing a constants file
* There are no opportunities for developers from other campuses to improve the codebase
* Non-UC campuses are not able to benefit from the codebase

Within the University of California system, a strong emphasis is placed on the value of our faculty and students contributing back to the higher education community. The UC system also hires talented staff that are also capable of contributing to this same community.

To that end, the University of California Office of the President should actively endorse and encourage staff contributions to open-source. While UCOP already [officially approves of open-source development](http://uctas.ucop.edu/documents/uc-guidelines-contributing-oss-communities.pdf), this should be taken a step further, including:

* Requesting that individual universities consider an open-source approach to developing their systems
* Encouraging communication among the universities to identify opportunities for open-source development
* An explicit statement that code-sharing platforms like GitHub and Codeplex are permissible for use within the UC system