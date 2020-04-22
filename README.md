**Calculate**

Project in continuous development.

**What is it?** => 
This project is a SPA developed to enable checking upon contract employees invoices.
Contract employees are allowed to pass their work to another contracted employees (substitute employee) which affects invoices. 

App calculates salary based on:
-given business days
-amount of hours employee works a day
-negative/positive hours
-employee's rate per hour

**Example** => 
Employee A has a doctor appointment and needs to get out of work 2 hours early to make it. Employee B does Employee's A work for 2 hours. Invoice result : 
-Employee B (-2x Employee's B rate/hour)
-Employee A (+2x Employee's B rate/hour)

**Features** =>
- add employee
- add events to calendar
- set amount of bussiness days in a current month
- when checking upon invoices at the end of a month set "verified" status when employee invoice is ok
- when you're done click "reset" button to discard "verified" status in all users
- clean up the space by moving events from chcecked month to archive
- browse archived events if needed

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
