pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'make build'
      }
    }

    stage('Push to Dockerhub') {
      steps {
        sh 'make push'
      }
    }

    stage('Deploy') {
      agent any
      steps {
        sh 'make deploy'
      }
    }

  }
}