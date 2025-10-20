# Elevate_Labs_Internship
# Node.js Demo App

This project is a containerized Node.js Express application built as part of the Elevate Labs Internship.

## What I Built

I created a simple web application using Express.js that runs on port 3000 and displays a welcome message. The application is containerized using Docker with a multi-stage build process for optimized image size and security.

## Key Components

**Application**: A basic Express server (`server.js`) that serves an HTTP endpoint with a greeting message.

**Docker Setup**: Uses a multi-stage Dockerfile with Node.js Alpine as the builder and distroless Node.js as the runtime, minimizing the final image size and attack surface.

**CI/CD Pipeline**: Automated GitHub Actions workflow that builds the Docker image, runs tests, scans for vulnerabilities using Trivy, and pushes the image to Docker Hub on successful builds.

**Dependencies**: Express.js for the web framework, with npm for package management.

## How It Works

1. Push code to the master branch
2. GitHub Actions automatically builds and tests the Docker image
3. Trivy scans for critical and high-severity vulnerabilities
4. On success, the image is pushed to Docker Hub with Alpine and commit SHA tags
5. Old images are cleaned up after deployment
