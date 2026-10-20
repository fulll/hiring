import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
    e2e: {
        specPattern: "**/*.feature",
        async setupNodeEvents(
            on: Cypress.PluginEvents,
            config: Cypress.ConfigOptions
        ): Promise<Cypress.ConfigOptions> {
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

            return config;
        },
        baseUrl: "https://internal-bank.fulll.fr",
    },
});
