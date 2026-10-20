import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
    e2e: {
        specPattern: "**/*.feature",
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);

            allureCypress(on, config, {
                resultsDir: "allure-results",
            });

            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            on('task', {
                log(message: string) {
                    console.log(message);
                    return null;
                },
            });

            return config;
        },
        baseUrl: "https://www.fulll.fr",
        viewportWidth: 1280,
        viewportHeight: 800,
        chromeWebSecurity: false,
        video: true,
        videosFolder: "cypress/videos",
        screenshotsFolder: "cypress/screenshots",
        screenshotOnRunFailure: true,
        defaultCommandTimeout: 15000,
        pageLoadTimeout: 30000,
    },
});
