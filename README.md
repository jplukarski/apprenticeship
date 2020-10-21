# Pair Programming Scheduler

This CLI Node.js app takes in a list of programmers, pairs everyone up for a week until each team member has paired with everyone else, and prints out a schedule to the terminal. If the list of members is odd then one programmer will be assigned independent programming each week. Assignment is random regardless of the order of names entered.

The schedule that is generated will begin on the next Monday after the program is run. For example, if generated on Monday, October 5th, the first day of the schedule will be Monday, October 12th; if generated on Sunday, October 18th, the first day of the schedule will be Monday, October 19th; if generated on Wednesday, October 7th, the first day of the schedule will be Monday, October 12th.

This program was written with Node v13.11.0

## Running the program
  
1. If you do not have Node.js installed on your local machine, you can install it using one of the following methods:

	- Download Windows or macOS installer directly from [nodejs.org](https://nodejs.org/en/download/):

	- CURL (mac): `curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"`

	- Homebrew (mac): `brew install node`

2. Using the terminal, navigate to the root of this project.

3. To start the program, run the following command: `node scheduler.js` followed by a list of names
	-	Example 1: `node scheduler.js Greg Omar Sandy Violet` will return if ran on October 7th, 2020 (results may be different due to randomization):
	>     -	--------------------
    >     -	Mon Oct 12 2020
    >     -	---------------
    >     -	Omar & Violet
    >     -	Greg & Sandy
    >     -	---------------------
    >     -	Mon Oct 19 2020
    >     -	---------------
    >     -	Violet & Sandy
    >     -	Greg & Omar
    >     -	---------------------
    >     -	Mon Oct 26 2020
    >     -	---------------
    >     -	Sandy & Omar
    >     -	Greg & Violet
    >     -	---------------------

	-	Example 2: `node scheduler.js Greg Omar Sandy Violet Pascal` shows an uneven number of teams:
    >     - ---------------------
    >     - Mon Oct 12 2020
    >     - ---------------
    >     - Greg & Pascal
    >     - Omar & Violet
    >     - Sandy
    >     - ---------------------
    >     - Mon Oct 19 2020
    >     - ---------------
    >     - Pascal & Violet
    >     - Greg & Sandy
    >     - Omar
    >     - ---------------------
    >     - Mon Oct 26 2020
    >     - ---------------
    >     - Violet & Sandy
    >     - Pascal & Omar
    >     - Greg
    >     - ---------------------
    >     - Mon Nov 02 2020
    >     - ---------------
    >     - Sandy & Omar
    >     - Violet & Greg
    >     - Pascal
    >     - ---------------------
    >     - Mon Nov 09 2020
    >     - ---------------
    >     - Omar & Greg
    >     - Sandy & Pascal
    >     - Violet
    >     - ---------------------

    - Example 3, If you want to include last names, wrap them in quotations: `node scheduler.js "Glenda Wright" "Bob Smith" "Rosario Hernandez"`:
    >     - ---------------------
    >     - Mon Oct 12 2020
    >     - ---------------
    >     - Glenda Wright & Rosario Hernandez
    >     - Bob Smith
    >     - ---------------------
    >     - Mon Oct 19 2020
    >     - ---------------
    >     - Rosario Hernandez & Bob Smith
    >     - Glenda Wright
    >     - ---------------------
    >     - Mon Oct 26 2020
    >     - ---------------
    >     - Bob Smith & Glenda Wright
    >     - Rosario Hernandez
    >     - ---------------------

    - Example 4, Names are separated by space. Names like "Bobby Sue" should also be wrapped in quotes (single quotes is okay): `node scheduler.js Benazir "Bobby Sue" Phil Yan`
    >     - ---------------------
    >     - Mon Oct 12 2020
    >     - ---------------
    >     - Bobby Sue & Yan
    >     - Benazir & Phil
    >     - ---------------------
    >     - Mon Oct 19 2020
    >     - ---------------
    >     - Yan & Phil
    >     - Benazir & Bobby Sue
    >     - ---------------------
    >     - Mon Oct 26 2020
    >     - ---------------
    >     - Phil & Bobby Sue
    >     - Benazir & Yan
    >     - ---------------------