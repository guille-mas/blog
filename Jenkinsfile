pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh "docker build -f ./Dockerfile -t guillermomaschwitz/blog:${env.PROJECT_VERSION} -t guillermomaschwitz/blog:${env.PROJECT_VERSION}-production --target blog-production ./"
	      sh "docker build -f ./Dockerfile -t guillermomaschwitz/blog:${env.PROJECT_VERSION}-development --target blog-development ./"
      }
    }

    stage('Push Docker images to Dockerhub') {
      steps {
        sh "docker login -u guillermomaschwitz -p ${env.DOCKER_REPO_CREDENTIALS}"
        sh "docker push guillermomaschwitz/blog"
      }
    }

    stage('Deploy to AWS') {
      agent any
      steps {
        sh 'make deploy'
      }
    }

  }
}