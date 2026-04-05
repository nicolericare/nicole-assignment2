pipeline {
    agent any

    triggers {
        cron('* * * * *')
    }

    environment {
        NETLIFY_SITE_ID = 'fba8ecd9-a3f4-47af-930e-108555b8ac24'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'netlify-token', variable: 'NETLIFY_AUTH_TOKEN')]) {
                    sh 'npx netlify deploy --dir=build --prod'
                }
            }
        }
    }
}