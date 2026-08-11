import { BasePage } from './BasePage';
import { FulllSiteLocators } from '../locators/FulllSiteLocators';

class FulllHomePage extends BasePage {
    open(): void {
        super.open('/');
        this.handleCookieBanner(FulllSiteLocators.cookieAcceptButton);
    }

    navigateToSolutionsMenu(): void {
        this.clickElement(FulllSiteLocators.solutionsDropdown);
    }

    selectSolutionByCategory(category: string): void {
        const isProduction = category.toLowerCase().includes('production');
        if (isProduction) {
            this.clickElement(FulllSiteLocators.solutionMissionComptable);
        }
    }

    validatePageRedirect(pageName: string): void {
        const isProduction = pageName.toLowerCase().includes('production');
        if (isProduction) {
            this.verifyUrlMatching('/mission-comptable');
        }
    }

    validatePageHeading(expectedText: string): void {
        this.verifyHeadingContains(expectedText);
    }
}

export const fulllHomePage = new FulllHomePage();
