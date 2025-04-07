pipeline {
    agent any
    
    triggers {
        githubPush()
    }

    environment {
        IMAGE_NAME = "simple-reactjs-app"
        CONTAINER_NAME = "my-react-container"
    }

    stages {
        stage("Clone") {
            steps {
                git branch: "main", url: "https://github.com/kaustubhrprabhu/jenkins-test.git"
            }
        }

        stage("Build Docker Images") {
            steps {
                bat "docker compose build"
            }
        }

        stage("Stop & remove old containers") {
            steps {
                bat "docker compose down"
            }
        }

        stage("Run New Container") {
            steps {
                bat "docker compose up -d"
            }
        }
    }

    post {
        success {
            echo "Deployed successfully!"
        }
        failure {
            echo "Deployment failed"
        }
    }
}