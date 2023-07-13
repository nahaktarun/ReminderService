# Node.js MySQL Flight Booking System - Microservice Architecture

This project is a Flight Booking System built using Node.js and MySQL, following a microservice architecture. It consists of multiple microservices such as authentication, API gateway, booking service, flight and search service, and reminder service. The communication between the microservices is facilitated by RabbitMQ, which acts as the message queue.

## Microservices

1. [Authentication Service](https://github.com/nahaktarun/AuthService)

   - Responsible for user authentication and authorization.
   - Manages user accounts, login, and registration.
   - Generates and verifies JSON Web Tokens (JWT) for secure API access.

2. [API Gateway](https://github.com/nahaktarun/API_Gateway)

   - Serves as the entry point for external requests to the system.
   - Provides a unified API interface for clients to communicate with various microservices.
   - Performs request validation, rate limiting, and routing to the appropriate microservice.

3. [Booking Service](https://github.com/nahaktarun/BookingService)

   - Handles flight bookings and related operations.
   - Allows users to search for available flights, select seats, and make reservations.
   - Manages booking details and communicates with the flight and search service.

4. [Flight and Search Service](https://github.com/nahaktarun/flightsAndSearchService)

   - Manages flight information, including available seats, prices, and schedules.
   - Provides search functionality for users to find flights based on criteria such as origin, destination, and date.
   - Sends notifications to the booking service about flight availability and updates.

5. [Reminder Service](https://github.com/nahaktarun/ReminderService)

   - Sends reminders and notifications to users about upcoming flights, check-in details, and booking updates.
   - Integrates with external notification systems (e.g., email, SMS) to deliver messages.

# Reminder Service

The Reminder Service is responsible for sending reminders and notifications to users about upcoming flights and booking updates in the Flight Booking System.

## Background Tasks

The Reminder Service handles background tasks and scheduled events to send notifications to users. It integrates with external notification systems (e.g., email, SMS) to deliver messages.

## RabbitMQ Integration

The Reminder Service communicates with other microservices via RabbitMQ, the message queue system. It receives notifications and updates about flight bookings and changes from other services to trigger reminder notifications for users.

Make sure to configure the RabbitMQ connection details in the configuration file of the Reminder Service to establish a connection and listen to the relevant message queues.

## Setup and Configuration

To set up and run the Reminder Service, follow these steps:

1. Install Node.js if it is not already installed.

2. Clone the repository:

   ```
   git clone https://github.com/your-username/reminder-service.git
   ```

3. Install the dependencies:

   ```
   cd reminder-service
   npm install
   ```

4. Configure the RabbitMQ connection details in the configuration file (`config.js`) of the Reminder Service.

5. Set up the external notification system integration (e.g., email, SMS) by providing the necessary credentials and configuration details in the Reminder Service.

6. Start the Reminder Service:

   ```
   npm start
   ```

The Reminder Service should now be running and handling background tasks to send reminders and notifications to users.

## Contributing

Contributions to the Reminder Service are welcome. If you find any issues or want to add new features, please open an issue or submit a pull request. Ensure that your code follows the established coding style and is well-documented.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

We would like to acknowledge the following resources and libraries that contributed to the development of the Reminder Service:

- Node.js: https://nodejs.org/
- RabbitMQ: https://www.rabbitmq.com/
- External notification system integration libraries (e.g., email, SMS)
- Other dependencies mentioned in the `package.json` file.
