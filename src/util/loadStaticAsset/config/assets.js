// Path to the EVO Member Portal screenshots folder.
const pathToEVOMemberPortalScreenshots =
  '/static/ProjectScreenshots/EVO Member Portal';

// Path to the Gateway Dashboard screenshots folder.
const pathToGatewayDashboardScreenshots =
  '/static/ProjectScreenshots/Pricematepay Gateway Dashboard';

// Path to the Pricematepay Sales Site screenshots folder.
const pathToPricematepaySalesSiteScreenshots =
  '/static/ProjectScreenshots/Pricematepay Sales Site';

// Path to the EVO Plugin screenshots folder.
const pathToEVOPluginScreenshots =
  '/static/ProjectScreenshots/EVO SEO WordPress Plugin';

// Path to the EVO Website screenshots folder.
const pathToEVOWebsiteScreenshots = '/static/ProjectScreenshots/EVO Website';

// Assets lookup object.
const db = {
  'ProjectScreenshot-PMPSalesSite-DesktopDesign-Home': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Desktop/Home.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-DesktopDesign-Company-Contact': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Desktop/Company - Contact.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-DesktopDesign-Company-AboutUs': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Desktop/Company - About Us.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-DesktopDesign-Products-MerchantServices': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Desktop/Products - Merchant Services.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-DesktopDesign-Products-Payments': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Desktop/Products - Payments.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-DesktopDesign-Products-Billing': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Desktop/Products - Billing.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-DesktopDesign-Products-Pricing': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Desktop/Products - Pricing.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-MobileDesign-Home': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Mobile/Home.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-MobileDesign-Home-NavigationBar': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Mobile/Home - Navigation Bar.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-MobileDesign-Products-Pricing': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Mobile/Products - Pricing.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-MobileDesign-Products-MerchantServices': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Mobile/Products - Merchant Services.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-MobileDesign-Products-Payments': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Mobile/Products - Payments.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-MobileDesign-Products-Billing': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Mobile/Products - Billing.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-MobileDesign-Company-ContactUs': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Mobile/Company - Contact Us.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-MobileDesign-Company-AboutUs': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Mobile/Company - About Us.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-TabletDesign-Home': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Tablet/Home.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-TabletDesign-Home-NavigationBar': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Tablet/Home - Navigation Bar.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-TabletDesign-Products-Pricing': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Tablet/Products - Pricing.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-TabletDesign-Products-MerchantServices': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Tablet/Products - Merchant Services.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-TabletDesign-Products-Payments': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Tablet/Products - Payments.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-TabletDesign-Products-Billing': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Tablet/Products - Billing.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-TabletDesign-Company-ContactUs': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Tablet/Company - Contact Us.png`,
    },
  },
  'ProjectScreenshot-PMPSalesSite-TabletDesign-Company-AboutUs': {
    urls: {
      publicStatic: `${pathToPricematepaySalesSiteScreenshots}/Tablet/Company - About Us.png`,
    },
  },
  'ProjectScreenshot-EVOWebsite-Contact': {
    urls: {
      publicStatic: `${pathToEVOWebsiteScreenshots}/Contact.png`,
    },
  },
  'ProjectScreenshot-EVOWebsite-FAQ': {
    urls: {
      publicStatic: `${pathToEVOWebsiteScreenshots}/FAQ.png`,
    },
  },
  'ProjectScreenshot-EVOWebsite-Features': {
    urls: {
      publicStatic: `${pathToEVOWebsiteScreenshots}/Features.png`,
    },
  },
  'ProjectScreenshot-EVOWebsite-GettingStarted': {
    urls: {
      publicStatic: `${pathToEVOWebsiteScreenshots}/Getting Started.png`,
    },
  },
  'ProjectScreenshot-EVOWebsite-Homepage': {
    urls: {
      publicStatic: `${pathToEVOWebsiteScreenshots}/Homepage.png`,
    },
  },
  'ProjectScreenshot-EVOWebsite-Pricing': {
    urls: {
      publicStatic: `${pathToEVOWebsiteScreenshots}/Pricing.png`,
    },
  },
  'ProjectScreenshot-EVOWebsite-WhyEVO': {
    urls: {
      publicStatic: `${pathToEVOWebsiteScreenshots}/Why EVO.png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-Crawlers': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Crawlers/Crawlers.png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-Crawlers-Errored': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Crawlers/Crawlers (Errored).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-HostEditor': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Host Editor/Host Editor.png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-HostEditor-Errored': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Host Editor/Host Editor (Errored).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-Overview-Locked': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Overview/Overview (Locked).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-Overview-Unlocked': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Overview/Overview (Unlocked).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-RedirectManager-Errored': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Redirect Manager/Redirect Manager (Errored).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-RedirectManager-Locked': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Redirect Manager/Redirect Manager (Locked).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-RedirectManager-Unlocked': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Redirect Manager/Redirect Manager (Unlocked).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-Settings': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Settings/Settings.png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-Settings-Errored': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Settings/Settings (Errored).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-SiteSpeedOptimizations-Active': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Site Speed Optimizations/Optimizations (Active).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-SiteSpeedOptimizations-Errored': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Site Speed Optimizations/Optimizations (Errored).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-Sitemaps-Active': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Sitemaps/Sitemaps (Active).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-Sitemaps-Errored': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Sitemaps/Sitemaps (Errored).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Dashboard-Sitemaps-Inactive': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Dashboard/Sitemaps/Sitemaps (Inactive).png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Post-AdvancedManipulations': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Post/Advanced Manipulations.png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Post-SchemaGenerator': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Post/Schema Generator.png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Post-SnippetPreview': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Post/Snippet Preview.png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Post-SocialCard-Facebook': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Post/Social - Facebook.png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-Post-SocialCard-Twitter': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/Post/Social - Twitter.png`,
    },
  },
  'ProjectScreenshot-EVOPlugin-WPPluginPage': {
    urls: {
      publicStatic: `${pathToEVOPluginScreenshots}/WordPress Plugin Page/Listing.png`,
    },
  },
  'ProjectScreenshot-EVOMemberPortal-ConfirmEmail-Success': {
    urls: {
      publicStatic: `${pathToEVOMemberPortalScreenshots}/Confirm Email/Confirm Email (Success).png`,
    },
  },
  'ProjectScreenshot-EVOMemberPortal-ConfirmEmail': {
    urls: {
      publicStatic: `${pathToEVOMemberPortalScreenshots}/Confirm Email/Confirm Email.png`,
    },
  },
  'ProjectScreenshot-EVOMemberPortal-Dashboard-Home': {
    urls: {
      publicStatic: `${pathToEVOMemberPortalScreenshots}/Dashboard/Home.png`,
    },
  },
  'ProjectScreenshot-EVOMemberPortal-Dashboard-Sites': {
    urls: {
      publicStatic: `${pathToEVOMemberPortalScreenshots}/Dashboard/Sites.png`,
    },
  },
  'ProjectScreenshot-EVOMemberPortal-Dashboard-SubscriptionDetails-GoogleConnected':
    {
      urls: {
        publicStatic: `${pathToEVOMemberPortalScreenshots}/Dashboard/Subscription Details - Google Connected.png`,
      },
    },
  'ProjectScreenshot-EVOMemberPortal-Dashboard-SubscriptionDetails-GoogleErrored':
    {
      urls: {
        publicStatic: `${pathToEVOMemberPortalScreenshots}/Dashboard/Subscription Details - Google Errored.png`,
      },
    },
  'ProjectScreenshot-EVOMemberPortal-Dashboard-SubscriptionDetails': {
    urls: {
      publicStatic: `${pathToEVOMemberPortalScreenshots}/Dashboard/Subscription Details.png`,
    },
  },

  'ProjectScreenshot-EVOMemberPortal-Public-Login': {
    urls: {
      publicStatic: `${pathToEVOMemberPortalScreenshots}/Public/Login.png`,
    },
  },
  'ProjectScreenshot-EVOMemberPortal-Public-Signup': {
    urls: {
      publicStatic: `${pathToEVOMemberPortalScreenshots}/Public/Signup.png`,
    },
  },
  'ProjectScreenshot-EVOMemberPortal-Wizard-RegisterPaymentInformation': {
    urls: {
      publicStatic: `${pathToEVOMemberPortalScreenshots}/Wizard/Register Payment Information.png`,
    },
  },
  'ProjectScreenshot-EVOMemberPortal-Wizard-RegisterWebsite': {
    urls: {
      publicStatic: `${pathToEVOMemberPortalScreenshots}/Wizard/Register Website.png`,
    },
  },
  'ProjectScreenshot-EVOMemberPortal-Wizard-SelectSubscription': {
    urls: {
      publicStatic: `${pathToEVOMemberPortalScreenshots}/Wizard/Select Subscription.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-Home': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Dashboard/Dashboard.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListCustomersNoData': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/List Customers (No Data).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListCustomersNoDataViaPagination':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/List Customers (Pagination - No Results).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateCustomer': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Create Customer.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateCustomerErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Create Customer (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateCustomerErroredAlreadyExists':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Create Customer (Errored - Customer Already Exists).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateCustomerSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Create Customer (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListCustomersWithData':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/List Customers (With Data).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-EditCustomer': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Edit Customer.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-EditCustomerErrored': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Edit Customer (Errored).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-EditCustomerSuccess': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Edit Customer (Success).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListCustomersAfterUpdateCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/List Customers (After Update).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteCustomer': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Delete Customer.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteCustomerSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Delete Customer (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ExportCustomers': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Export Customers.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListPlans': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/List Plans.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPlan': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/Add Plan.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPlanErrored': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/Add Plan (Errored).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPlanSuccess': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/Add Plan (Success).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdatePlan': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/Update Plan.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdatePlanErrored': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/Update Plan (Errored).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdatePlanSuccess': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/Update Plan (Success).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeletePlan': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/Delete Plan.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteSuccess': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/Delete Plan (Success).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListPlansWithData': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/List Plans (with Data).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListPlansNoDataViaPagination':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/List Plans (Pagination - No Results).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ExportPlans': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Plans/Export Plans.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListPaymentMethodsNoData':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Payment Methods/List Payment Methods (No Data).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPaymentMethod': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Payment Methods/Add Payment Method.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPaymentMethodErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Payment Methods/Add Payment Method (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPaymentMethodSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Payment Methods/Add Payment Method (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdatePaymentMethod': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Payment Methods/Update Payment Method.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdatePaymentMethodErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Payment Methods/Update Payment Method (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeletePaymentMethod': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Payment Methods/Delete Payment Method.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeletePaymentMethodSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Payment Methods/Delete Payment Method (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListPaymentMethodsWithData':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Customers/Payment Methods/List Payment Methods (With Data).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListInvoicesNoData': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/List Invoices/List Invoices (No Data).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Create Invoice/Create Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateInvoiceCreateSelectCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Create Invoice/Create Invoice (Create or Select Customer).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateInvoiceSelectCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Create Invoice/Create Invoice (Select Customer).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateInvoiceSelectDate':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Create Invoice/Create Invoice (Select Date).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateInvoiceErrored': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Create Invoice/Create Invoice (Errored).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdateInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Update Invoice/Update Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddLineItem': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Add Invoice Line Item/Add Invoice Line Item.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddLineItemSelectLineItem':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Add Invoice Line Item/Add Invoice Line Item (Select Line Item).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddLineItemSelected': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Add Invoice Line Item/Add Invoice Line Item (Selected).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddLineItemSelectedErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Add Invoice Line Item/Add Invoice Line Item (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdateInvoiceSuccess': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Update Invoice/Update Invoice (Success).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-FinalizeInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Finalize Invoice/Finalize Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-FinalizeInvoiceSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Finalize Invoice/Finalize Invoice (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/View Invoice/View Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewInvoiceLineItem': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/View Invoice Line Item/View Invoice Line Item.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-MarkInvoiceAsUncollectible':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Mark Invoice as Uncollectible/Mark Invoice as Uncollectible.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-RecordPayment': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Record Payment/Record Payment.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-RecordPaymentErrored': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Record Payment/Record Payment (Errored).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SendInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Send Invoice/Send Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CancelInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Cancel Invoice/Cancel Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewUnbrandedHostedInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Hosted Invoice/Hosted Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewUnbrandedHostedInvoiceErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Hosted Invoice/Hosted Invoice (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewUnbrandedHostedInvoiceFormFilled':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Hosted Invoice/Hosted Invoice (Form Filled).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewUnbrandedHostedInvoicePaid':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/Hosted Invoice/Hosted Invoice (Paid).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewPaidInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/View Invoice/View Invoice (Paid).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewInvoicesWithPaidInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Invoices/List Invoices/List Invoices (Paid).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListSubscriptionsNoData':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/List Subscriptions (No Data).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscription': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Create Subscription.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionSelectCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Create Subscription (Select Customer).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionCreateCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Create Subscription (Create Customer).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionSelectPlan':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Create Subscription (Select Plan).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionCreatePlan':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Create Subscription (Create Plan).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionSelectPaymentMethod':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Create Subscription (Select Payment Method).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionCreatePaymentMethod':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Create Subscription (Create Payment Method).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionFormFilled':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Create Subscription (Form Filled).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListSubscriptionsWithNewlyCreatedSubscription':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Subscriptions (with Newly Created Subscription).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdateSubscription': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Update Subscription.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdateSubscriptionErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Update Subscription (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewSubscription': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/View Subscription.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewSubscriptionCancelSubscription':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/View Subscription (Cancel).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewSubscriptionConfirmationPrompt':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/View Subscription (Cancelled Prompt).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewSubscriptionCancelFinalWarning':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/View Subscription (Cancel Final Warning).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewSubscriptionCancelled':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/View Subscription (Cancelled).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteSubscription': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Subscriptions/Delete Subscription.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListChargesNoData': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/List Charges (No Data).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateCharge': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Create Charge.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeSelectCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Create Charge (Select Customer).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeCreateCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Create Charge (Create Customer).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeNoCustomerSelected':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Create Charge (No Customer Selected).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeSelectPaymentMethod':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Create Charge (Select Payment Method).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeAddPaymentMethod':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Create Charge (Add Payment Method).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeSelectInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Create Charge (Select Invoice).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeWithTypeCharge':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Create Charge (Type Charge).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeErroredCannotChargePaidInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Create Charge (Errored - Cannot Charge Paid Invoice).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListChargesWithNewlyCreatedCharge':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/List Charges (With Newly Created Charge).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewCharge': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Charge.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeIssueRefund':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Charge - Issue Refund.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeIssueRefundErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Charge - Issue Refund (Error).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeIssueRefundErroredExceedsChargeAmount':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Charge - Issue Refund (Error, Exceeds Charge Amount).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeIssueRefundSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Charge - Issue Refund (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeWithRefund': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Charge - After Refund.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeWithRefundViewRefund':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Charge - View Refund.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListChargesWithNewlyCreatedAuthorization':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/List Charges (With Newly Created Authorization).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorization': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Authorization.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorizationCancel':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Authorization - Cancel.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorizationCancelSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Authorization - Cancel (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorizationCancelled':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Authorization - Cancelled.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorizationSettle':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Authorization - Settle.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorizationSettleErroredExceedsAuthorizationAmount':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Charge Summary - View Authorization - Settle (Errored - Exceeds Authorization Amount).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListChargesWithNewlyCancelledCharge':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/List Charges (with Newly Cancelled Charge).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListChargesWithPaidHostedInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/List Charges (with Paid Hosted Invoice).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListChargesWithRefunds':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/List Charges (with Refunded Charge).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ExportCharges': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Charges/Export Charges.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileAccountInformation':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/Business Profile - Account Information.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileAccountInformationErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/Business Profile - Account Information (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileAccountInformationSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/Business Profile - Account Information (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBranding':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/Business Profile - Branding.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingWithAccountInformation':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/Business Profile - Branding (with Account Information).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingLogoSelected':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/Business Profile - Branding (Logo Selected).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingSelectColour':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/Business Profile - Branding (Select Colour).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingPreviewHostedInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/Business Profile - Branding (Colours Set - Preview Hosted Invoice).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingPreviewingEmail':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/Business Profile - Branding (Previewing Email).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/Business Profile - Branding (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewBrandedHostingInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Business Profile/View Hosted Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AccountProfile': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Account Profile/Account Profile.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AccountProfileErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Account Profile/Account Profile (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagement': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/User Management/User Management.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementInviteUser':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/User Management/User Management - Invite User.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementInviteUserErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/User Management/User Management - Invite User (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementInviteUserSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/User Management/User Management - Invite User (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInvite':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Accept Organization Invite/Invitation Email.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInviteAcceptInvite':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Accept Organization Invite/Accept Invite.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInviteAcceptInviteErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Accept Organization Invite/Accept Invite (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInviteAcceptInviteErroredCodeExpired':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Accept Organization Invite/Accept Invite (Errored - Code Expired).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInviteSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Accept Organization Invite/Accept Invite (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInviteListOrganizations':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Accept Organization Invite/Accept Invite (Organizations).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementEditMembership':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/User Management/User Management - Edit Membership.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementDeleteMembership':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/User Management/User Management - Delete Membership.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementDeleteMembershipSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/User Management/User Management - Delete Membership (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListAuditLog': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Audit Log/List Audit Log.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListKeysNoData': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Developers/List Keys (No Data).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateKey': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Developers/List Keys - Create Key.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateKeyErrored': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Developers/List Keys - Create Key (Errored).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateKeySuccess': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Developers/List Keys - Create Key (Success).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListKeysWithData': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Developers/List Keys (with Data).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteKey': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Developers/List Keys - Delete Key.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteKeySuccess': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Developers/List Keys - Delete Key (Success).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesHome':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/Integration Guides/Home.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesAcceptPayments':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/Integration Guides/Payments/Accept Payments.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesSaveCard':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/Integration Guides/Payments/Save Card.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesCreateInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/Integration Guides/Payments/Create Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesAcceptDeposit':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/Integration Guides/Payments/Accept Deposit.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesCreateSubscription':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/Integration Guides/Subscriptions/Create Subscription.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesModifySubscription':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/Integration Guides/Subscriptions/Modify Subscription.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesSendHostedInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/Integration Guides/Hosted Invoice/Send Hosted Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesSendRecurringInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/Integration Guides/Hosted Invoice/Send Recurring Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceIntroduction':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/API Reference/Introduction.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceAuthentication':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/API Reference/Authentication.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferencePagination':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/API Reference/Pagination.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCommonErrors':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/API Reference/Common Errors.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Customers/Create Customer.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetCustomers':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Customers/Get Customers.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Customers/Get a Customer.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdateCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Customers/Update Customer.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeleteCustomer':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Customers/Delete Customer.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreatePlan':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Plans/Create Plan.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetPlans': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Plans/Get Plans.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificPlan':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Plans/Get a Plan.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdatePlan':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Plans/Update Plan.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeletePlan':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Plans/Delete Plan.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreatePaymentSource':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Payment Sources/Create Payment Source.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetPaymentSources':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Payment Sources/Get Payment Sources.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificPaymentSource':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Payment Sources/Get a Payment Source.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdatePaymentSource':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Payment Sources/Update Payment Source.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeletePaymentSource':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Payment Sources/Delete Payment Source.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoices/Create Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetInvoices':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoices/Get Invoices.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoices/Get an Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdateInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoices/Update Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeleteInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoices/Delete Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceFinalizeInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoices/Finalize Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceSendInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoices/Send Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceMarkInvoiceAsUncollectible':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoices/Mark as Uncollectible.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceVoidInvoice':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoices/Void Invoice.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateLineItem':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoice Line Items/Create Line Item.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetLineItems':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoice Line Items/Get Line Items.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificLineItem':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoice Line Items/Get a Line Item.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdateLineItem':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoice Line Items/Update Line Item.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeleteLineItem':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Invoice Line Items/Delete Line Item.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateSubscription':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Subscriptions/Create Subscription.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSubscriptions':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Subscriptions/Get Subscriptions.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificSubscription':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Subscriptions/Get a Subscription.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdateSubscription':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Subscriptions/Update Subscription.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeleteSubscription':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Subscriptions/Delete Subscription.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCancelSubscription':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Subscriptions/Cancel Subscription.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateCharge':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Charges/Create Charge.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetCharges':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Charges/Get Charges.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificCharge':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Charges/Get a Charge.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCaptureCharge':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Charges/Capture Charge.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCancelCharge':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Charges/Cancel Charge.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateRefund':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Refunds/Create Refund.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetRefunds':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Refunds/Get Refunds.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificRefund':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Refunds/Get a Refund.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateToken':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Tokens/Create Token.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificToken':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/API Documentation/API Reference/Tokens/Get a Token.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementListOrgs':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Organization Management/List Organizations.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementOnboardingSummary':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Organization Management/Onboarding Summary.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementSetStatus':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Organization Management/Set Organization Status.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementSetStatusSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Organization Management/Set Organization Status (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementOnboardingSummaryActiveStatus':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Organization Management/Onboarding Summary (After Set Active).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementPorticoSettings':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Organization Management/Portico Settings.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementPorticoSettingsErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Organization Management/Portico Settings (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementPorticoSettingsSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Organization Management/Portico Settings (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingBusinessStructure':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Onboarding/Business Structure.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingBusinessDetails':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Onboarding/Business Details.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingBusinessRepresentative':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Onboarding/Business Representative.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingCreditCardStatement':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Onboarding/Credit Card Statement.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingBankDetails':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Onboarding/Bank Details.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingSummary': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Onboarding/Summary.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingSummarySuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Onboarding/Summary (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementOnboardingSummaryPending':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Organization Management/Onboarding Summary (Pending).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementListOrgsWithPendingStatus':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Organization Management/List Organizations (with Pending).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SelectOrg': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Select Organization/Select Organization.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SelectOrgAddOrg': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Select Organization/Add Organization.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SelectOrgAddOrgErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Select Organization/Add Organization (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SelectOrgAddOrgSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Select Organization/Add Organization (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SelectOrgListOrgs': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Select Organization/Select Organization (with newly created Organization).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAnalytics': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Analytics/Analytics.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SendVerificationEmail':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Email Verification/Send Verification Email.png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SendVerificationEmailSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Email Verification/Send Verification Email (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-VerifyEmailAddress': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Email Verification/Verify Email Address.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-VerifyEmailAddressErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Email Verification/Verify Email Address (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-VerifyEmailAddressSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Email Verification/Verify Email Address (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-LogOutPrompt': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Log Out/Log Out.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-Logout': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Logout.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-Signup': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Signup.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-SignupErrored': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Signup (Errored).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-Login': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Login.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-LoginErrored': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Login (Errored).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-SignupSuccess': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Login (Success).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ForgotPassword': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Forgot Password.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ForgotPasswordErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Forgot Password (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ForgotPasswordSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Forgot Password (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ResetPassword': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Reset Password.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ResetPasswordErrored':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Reset Password (Errored).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ResetPasswordFormFilled':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Reset Password (Form Filled).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ResetPasswordSuccess':
    {
      urls: {
        publicStatic: `${pathToGatewayDashboardScreenshots}/Desktop/Public/Reset Password (Success).png`,
      },
    },
  'ProjectScreenshot-PMPGateway-MobileDesign-Signup': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Signup.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-SignupSuccess': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Signup (Success).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-Login': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Login.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-DashboardHome': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Dashboard.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-ExpandSidebar': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Expanded Sidebar.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-ListInvoices': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/List Invoices.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-CreateInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Create Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-CreateInvoiceSelectCustomer': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Create Invoice - Select Customer.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-EditInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Edit Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-EditInvoiceSelectCustomer': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Edit Invoice (Select Customer).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-AddInvoiceLineItem': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Add Invoice Line Item.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-EditInvoiceUpdated': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Edit Invoice (Updated).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-FinalizeInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Finalize Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-ViewInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/View Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-MobileDesign-ViewHostedInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Mobile/Hosted Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-TabletDesign-Signup': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Tablet/Signup.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-TabletDesign-SignupSuccess': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Tablet/Signup (Success).png`,
    },
  },
  'ProjectScreenshot-PMPGateway-TabletDesign-Login': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Tablet/Login.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-TabletDesign-DashboardHome': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Tablet/Dashboard.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-TabletDesign-ListCustomers': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Tablet/List Customers.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-TabletDesign-CreateInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Tablet/Create Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-TabletDesign-CreateInvoiceSelectCustomer': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Tablet/Create Invoice - Select Customer.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-TabletDesign-UpdateInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Tablet/Update Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-TabletDesign-ViewInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Tablet/View Invoice.png`,
    },
  },
  'ProjectScreenshot-PMPGateway-TabletDesign-ViewHostedInvoice': {
    urls: {
      publicStatic: `${pathToGatewayDashboardScreenshots}/Tablet/Hosted Invoice.png`,
    },
  },
};

export default db;
