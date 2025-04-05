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
                git "https://github.com/kaustubhrprabhu/jenkins-test.git"
            }
        }

        stage("Build Docker Image") {
            steps {
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage("Stop & remove old containers") {
            steps {
                sh "docker rm -f $CONTAINER_NAME"
            }
        }

        stage("Run New Container") {
            steps {
                sh "docker run -d -p 80:80 --name $CONTAINER_NAME $IMAGE_NAME"
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