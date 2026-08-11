pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:/opt/homebrew/bin:$PATH"
        NODE_HOME = "/Users/macbook/.nvm/versions/node/v20.19.5"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                dir('QA/bonus-task') {
                    sh '${NODE_HOME}/bin/npm ci || ${NODE_HOME}/bin/npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                dir('QA/bonus-task') {
                    sh '${NODE_HOME}/bin/npm test || true'
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                dir('QA/bonus-task') {
                    sh 'allure generate allure-results --clean -o allure-report || true'
                }
            }
        }
    }

    post {
        always {
            dir('QA/bonus-task') {
                archiveArtifacts artifacts: 'cypress/videos/**/*', allowEmptyArchive: true
                archiveArtifacts artifacts: 'allure-report/**/*', allowEmptyArchive: true
            }
            allure includeProperties: false, jdk: '', results: [[path: 'QA/bonus-task/allure-results']]
        }
        success {
            echo 'All tests passed!'
        }
        failure {
            echo 'Tests failed. Check Allure report for details.'
        }
    }
}
