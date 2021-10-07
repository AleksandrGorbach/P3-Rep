# Skill-Bid

[Live Version](https://awesome-jepsen-f2cb4f.netlify.app/)

## Overview
A web based application that allows users to list a service/need and have potential freelance workers bid on their project/listing.
A homepage that displays all active listings and has a filter/search to sort for more specific items based on the users capabilities.
Users will be allowed to click on the listing(s) and bid on them as long as they are currently signed in with their account. 
Users can post listings and provide images|description|title|price|time-frame.
Bidders can contact the original poster with any inquiries. 

![imageAlt](https://i.imgur.com/slBWrX1.png)

![imageAlt](https://i.imgur.com/tWGa9n0.png)

[Team Expectations](https://docs.google.com/document/d/1qZNkbr4kBtDA72sl9xWuOMZ0nyU9gPjKFRz2DB21vVI/edit?usp=sharing)

```
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
  username: { type: String, require: true },
  email: { type: String, required: true },
  password_digest: { type: String, required: true, select: false },
},
  { timestamps: true }
);
export default mongoose.model("User", UserSchema)
```

```
import mongoose from "mongoose"
const Schema = mongoose.Schema;
const JobSchema = new Schema(
  {
    name: { type: String, require: true },
    budget: { type: Number, require: true },
    description: {type: String, require, true},
    completeBy: { type: String, require: true },
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true}
  },
  { timestamps: true }
);
export default mongoose.model("Job", JobSchema)
```

## MVP
- Users should be able to sign-in/sign-out
- Displaying listings
- Styling with flexbox/grid
- Detail page for individual listings
- Users can post, update, delete their listings

## PMVP
- Modal for form of contact
- A form of contact
- Making a more reactive UI
- Authorized users can bid on a listing and then the original poster can decide on the winner.

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|August 2nd| Prompt / Wireframes / Timeframes / Approval | Incomplete
|August 3rd| Core Application Structure | Incomplete
|August 4th| Find/Post DB | Incomplete
|August 5th| MVP Functionality | Complete
|August 6th| Styling MVP | Complete
|August 7th| PMVP Functionality | Complete
|August 8th| PMVP Styling | Complete
|August 9th| Finishing touches & debugging | Incomplete
|August 10th| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating Branches | E | .5hrs | hrs | hrs |
| Initial Skeleton | M | 3hrs | hrs | hrs |
| Component Setup | H | 3hrs | hrs | hrs |
| DB Setup | H | 3hrs | hrs | hrs |
| Backend Functionality debugging | H | 2hrs | hrs | hrs |
| Landing Page | H | 3hrs | hrs | hrs |
| Detail Page | H | 3hrs | hrs | hrs |
| Gallery For Listings (Desktop) | H | 2hrs | hrs | hrs |
| Adding Search Bar & Filter | M | 2 hrs | hrs | hrs |
| Sign-in/Sign-up | H | 3hrs | hrs | hrs |
| Modals | M | 3hrs | hrs | hrs |
| Media Queries | M | 2hrs | 3hrs | 3hrs |
| Debugging & troubleshooting | H | 3hrs | 6hrs | 6hrs |
| Getting user feedback | M | 2hrs | 3hrs | 3hrs |
| Testing functionality | H | 2hrs | 3hrs | 3hrs |
| Mock Presentation(s) | M | 1hr | .5 hrs | .5 hrs |
| Total | 37.5 | hrs | 

## SWOT Anylsis
Strength:
We have a group of strong team players and are centered around communication and effecieny. 

Weakness:
We're new to the backend and still have a lot to learn with that aspect of the project as well as the css.

Opportunity:
Showcasing the ability to work in a group for the first time and successfully create a fullstack application.

Threat:
This will be our first ever group project so there will be a learning curve throughout the process. 
