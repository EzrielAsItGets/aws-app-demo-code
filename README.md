
# Dockerized Node.js Application

This repository contains a Dockerized Node.js application, ready for local development via Docker. It includes a GitHub workflow that automatically deploys the application to Amazon Elastic Container Registry (ECR) on every commit.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Docker**: You need Docker installed and running on your machine. Visit [Docker's Get Started](https://www.docker.com/get-started) page to download and install Docker.
- **Git**: Required for version control. If you need to install Git, follow the instructions on the [Git website](https://git-scm.com/downloads).
- **AWS CLI**: Necessary for interacting with AWS services, including ECR. Install it by following the instructions on the [AWS CLI](https://aws.amazon.com/cli/) page.
- **Configure AWS Credentials**: Ensure your AWS Credentials are stored as repository secrets in your repository.

## Running the Application Locally

To run the application locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/EzrielAsItGets/aws-app-demo-code.git
   cd aws-app-demo-code
   ```

2. **Build the Docker Image**
   ```bash
   docker build -t <your-app-name> .
   ```

3. **Run the Container**
   ```bash
   docker run -p 8080:8080 <your-app-name>
   ```

   Replace `8080:8080` with the port mapping appropriate to your application if different.

4. **Access the Application**
   Open a browser and visit `http://localhost:8080` to see your application running.

## Deployment to AWS ECR

This project includes a GitHub Actions workflow that automates the deployment of the Docker container to AWS ECR upon every commit. Ensure your GitHub repository secrets are configured with AWS access credentials and region to utilize this feature.

## Contributing

Contributions to this project are welcome! Please fork the repository and submit a pull request with your proposed changes.

For any queries or enhancements, feel free to open an issue in the repository.

## Acknowledgements

This repository is a copy of [vue-js-node-js-express-mysql](https://github.com/bezkoder/vue-js-node-js-express-mysql).