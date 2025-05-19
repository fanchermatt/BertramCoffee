# Bertram Coffee

This project is intended to solve Bertram Labs growing issue getting the new employee to pay their fair share. 

It has been built in a way that would serve as a base towards a future end goal, provided the company had unlimited budget and time for superfluous office politics and caffiene needs. More information can be found below in the Long Term section.

# Running the program

This project can be started locally with two different methods.

## 1. Docker via compose

### Requisite Software

1. [Docker](https://www.docker.com/products/docker-desktop/) Latest version recommended.
2. [Git](https://git-scm.com/downloads) Latest version recommended.
3. Integrated Terminal of your choice

### Steps

1. Ensure Docker Engine is running
2. Open the integrated terminal of your choice. Navigate to your desired directory to host the repository and then run the following commands in order.
3. `git clone https://github.com/fanchermatt/BertramCoffee`
4. `cd BetramCoffee`
5. `mv .env.docker .env`
6. `docker-compose up -d`

Once all containers are up and running (Note the node server may restart a few times while the mysql service is spinning up), you will be able to view the application in your browser at [localhost:3000](http://localhost:3000).

## 2. Local Machine

### Requisite Software

1. [Node.js](https://nodejs.org/en/download) version 18.0 or above.
2. [Git](https://git-scm.com/downloads) Latest version recommended.
3. [MySQL Database](https://dev.mysql.com/downloads/) latest version recommended (URL, and port number, must be accessible from the installation environment).
4. [Git](https://git-scm.com/downloads) Latest version recommended.
5. Integrated Terminal of your choice

### Steps

1. Ensure MySQL is running
2. Open the integrated terminal of your choice. Navigate to your desired directory to host the respoitory and then run the following commands in order.
3. `git clone https://github.com/fanchermatt/BertramCoffee`
4. `cd BetramCoffee`
5. Open the .env.local file, and change the DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT variables to your MySQL instance. Save the file as ".env"

#### Start the server

1. Open the integrated terminal of your choice. Navigate to the root of the git repository and run the following commands in order
2. `cd server`
3. `npm run bootstrap-server`

#### Start the Client

1. Open the integrated terminal of your choice. Navigate to the root of the git repository and run the following commands in order
2. `cd client`
3. `npm run bootstrap-client`

Once both terminals are up and running, you will be able to view the application in your browser at [localhost:3000](http://localhost:3000).

# Assumptions

For the sake of getting this completed in the given time frame, we have made some very generous assumptions for this initial demo.

1. Whoever has the largest debt tally is the wallet/purse that day. If there is a tie, the person with the more expensive drink order will pay. (this one stays, no matter what as it is the root assumption)
2. There are no drink sizes available. This isn't some chain we're discussing, coffee drinks have set ratio's of milk to coffee and that is how it is.
3. Everybody in office is a creature of habit, and does not deviate from their coffee order. No iced in the summmer and hot in the winter stuff here, you get what you get.
4. Everybody is in office everyday. We could set up schedule's and add a column to the employee table, but this wouldn't serve a purpose in the long term solution anyways, so I omitted it here.

# Long Term Solution

In order to build out a proper long term solution to this growing friction, we need to take a look at the easiest method for employee's to get their drink orders in each day they are in office.

In my experience, removing as many barriers to entry will give the best chance that the software will take and be utilized. I will first describe the vision I have for the perfect system, and then describe the additional steps needed to take to reach it.

## The Vision

The system will utilize a sort of "batch ordering" process. Orders must be placed by a certain time each day, and then the server will process any outstanding orders into the business logic section.

Employee's will be able authenticate to manage a list of favorite drinks, and set up recurring orders based on their work schedule if they don't want to have to place an order each day.

After the business logic has processed, a notification will be sent out to all users who ordered coffee that day notifying them who's turn it is. A list of drink's should be provided on this notification as well, to make ordering easy.

## Additions necessary to complete the vision

1. Authentication - Ideally this would be run through something employee's use regularly (Ms Account, Azure AD, etc.). This depends on what is utilized for the company commonly already, but I can imagine placing the system behind the company internal firewall and utilizing microsoft accounts.

2. Preference management - Employee's will need to be able to set up a list of "favorite" drinks for easy access when placing orders. The "employee_drink" link table would be repurposed from it's current implementation to have a one-to-many relationship, and add a size column if the shop offers sizing.

3. Recurring Orders - Employee's will need to be able to set up a recurring order that is placed based on the schedule they enter for it. Implement a table that holds recurring orders, and set up a daily job (Bree is a common library i've used for node in the past that is easy to set up, and what I would use if nodejs were utilized as the backend) that runs at say 7am and automatically places the coffee orders for that day into the order waiting to be fulfilled later that day.

4. Process Orders and send notification - At noon everyday, orders should be locked in, processed through the business logic, and then a notification should be sent with that days results. Four tables would be necessary for this addition, as we'd need to hold the orders awaiting fullfillment, an order history table, a notification queue table, and a sent notification table. These would allow us to have a more robust system and a paper trail to follow to settle disputes. Once again, Bree is the library I'd use for the nodejs server to ensure this runs daily at the right time. For the notification, you could either set up an email distribution list or MS teams channel. Both are capable of utilizing an EJS template on the nodejs server which will provide the name of that day's (un)lucky winner and a list of the drinks needing to be ordered.

5. Drink management - We would need to offer a way to manage drinks, pricing, etc available. Sizes could be added, if they are offered at the shop and pricing for the sizes would need additional columns on the drink table. This would likely end up as a manual process, and would need to be updated as price changes are noted in the coffee shop. In the super-perfect world, the coffee shop would have an API we could hit to refresh this data overnight each night to ensure it never lags or falls behind.

I could continue with this list, with features that would make the process as automated as possible, but at a certain point you're just writing an entire ERP system, storing credit card info which in turn subjects you to PCI compliance rules and that is a touch ridiculous. It would probably be cheaper and make more sense to petition Bertram Capital to provide a full time barista in house instead. This seems like a reasonable place to stop. Thank you for indulging my creative brain.
