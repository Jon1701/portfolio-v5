import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { Page, Margin } from '_templates/Pages/Project';
import {
  Section,
  H1,
  H2,
  TechnologiesGrid,
} from '_templates/Sections/ProjectPage';
import { TechnologyLogo, technologyEnums } from '_components/TechnologyLogo';
import GlobalStyle from '_styles/Global';
import ImageCarousel from '_components/ImageCarousel';
import loadStaticAsset from '_util/loadStaticAsset';

/**
 * Container for the grid of technologies.
 */
const ContainerGrid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

// Images to be displayed in the carousel.
const images = [
  {
    title: 'Dashboard Home',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-Home'
    ),
  },
  {
    title: 'List all Customers',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListCustomersNoData'
    ),
  },
  {
    title: 'Create a new Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateCustomer'
    ),
  },

  {
    title: 'Could not create a new Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateCustomerErrored'
    ),
  },
  {
    title: 'Unable to create Customer, Customer already exists',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateCustomerErroredAlreadyExists'
    ),
  },
  {
    title: 'Customer successfully created',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateCustomerSuccess'
    ),
  },
  {
    title: 'List the newly created Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListCustomersWithData'
    ),
  },
  {
    title: 'Edit Customer information',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-EditCustomer'
    ),
  },
  {
    title: 'Unable to edit Customer information',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-EditCustomerErrored'
    ),
  },
  {
    title: 'Customer successfully updated',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-EditCustomerSuccess'
    ),
  },
  {
    title: 'List newly updated Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListCustomersAfterUpdateCustomer'
    ),
  },
  {
    title: 'Delete Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteCustomer'
    ),
  },
  {
    title: 'Customer successfully deleted',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteCustomerSuccess'
    ),
  },
  {
    title: 'Export Customers',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ExportCustomers'
    ),
  },

  {
    title: 'List all Products & Services',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListPlans'
    ),
  },
  {
    title: 'Add a new Product or Service',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPlan'
    ),
  },
  {
    title: 'Unable to add a new Product or Service',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPlanErrored'
    ),
  },
  {
    title: 'Successfully added a new Product or Service',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPlanSuccess'
    ),
  },
  {
    title: 'Edit Product or Service',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdatePlan'
    ),
  },
  {
    title: 'Unable to update Product or Service',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdatePlanErrored'
    ),
  },
  {
    title: 'Successfully updated Product or Service',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdatePlanSuccess'
    ),
  },
  {
    title: 'Delete Product or Service',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeletePlan'
    ),
  },
  {
    title: 'Successfully deleted Product or Service',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteSuccess'
    ),
  },
  {
    title: 'List updated Products or Services',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListPlansWithData'
    ),
  },
  {
    title: 'Export Products or Services',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ExportPlans'
    ),
  },
  {
    title: 'List Payment Methods',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListPaymentMethodsNoData'
    ),
  },
  {
    title: 'Add Payment Method',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPaymentMethod'
    ),
  },
  {
    title: 'Unable to add Payment Method',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPaymentMethodErrored'
    ),
  },
  {
    title: 'Successfully added a Payment Method',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddPaymentMethodSuccess'
    ),
  },
  {
    title: 'Edit Payment Method',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdatePaymentMethod'
    ),
  },
  {
    title: 'Unable to edit Payment Method',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdatePaymentMethodErrored'
    ),
  },
  {
    title: 'Delete Payment Method',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeletePaymentMethod'
    ),
  },
  {
    title: 'Successfully deleted Payment Method',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeletePaymentMethodSuccess'
    ),
  },
  {
    title: 'List some more Payment Methods',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListPaymentMethodsWithData'
    ),
  },
  {
    title: 'List Invoices',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListInvoicesNoData'
    ),
  },
  {
    title: 'Create an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateInvoice'
    ),
  },
  {
    title: 'Add a Customer to an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateInvoiceCreateSelectCustomer'
    ),
  },
  {
    title: 'Select existing Customer to be added to an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateInvoiceSelectCustomer'
    ),
  },
  {
    title: 'Select Invoice start and due dates',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateInvoiceSelectDate'
    ),
  },
  {
    title: 'Unable to create Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateInvoiceErrored'
    ),
  },
  {
    title: 'Edit Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdateInvoice'
    ),
  },
  {
    title: 'Add Line Item to Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddLineItem'
    ),
  },
  {
    title: 'Select Product or Service to be added to Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddLineItemSelectLineItem'
    ),
  },
  {
    title: 'Make changes to the Line Item before adding',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddLineItemSelected'
    ),
  },
  {
    title: 'Unable to add Line Item',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AddLineItemSelectedErrored'
    ),
  },
  {
    title: 'Successfully updated Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdateInvoiceSuccess'
    ),
  },
  {
    title: 'Finalize the Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-FinalizeInvoice'
    ),
  },
  {
    title: 'Successfully finalized the Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-FinalizeInvoiceSuccess'
    ),
  },
  {
    title: 'View finalized Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewInvoice'
    ),
  },
  {
    title: 'View Line Item',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewInvoiceLineItem'
    ),
  },
  {
    title: 'Mark the Invoice as Uncollectible',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-MarkInvoiceAsUncollectible'
    ),
  },
  {
    title: 'Record External Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-RecordPayment'
    ),
  },
  {
    title: 'Unable to record External Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-RecordPaymentErrored'
    ),
  },
  {
    title: 'Send Invoice to Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SendInvoice'
    ),
  },
  {
    title: 'Cancel Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CancelInvoice'
    ),
  },
  {
    title: 'View Hosted Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewUnbrandedHostedInvoice'
    ),
  },
  {
    title: 'Unable to pay Hosted Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewUnbrandedHostedInvoiceErrored'
    ),
  },
  {
    title: 'Ready to pay Hosted Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewUnbrandedHostedInvoiceFormFilled'
    ),
  },
  {
    title: 'Invoice successfully paid',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewUnbrandedHostedInvoicePaid'
    ),
  },
  {
    title: 'List newly paid Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewInvoicesWithPaidInvoice'
    ),
  },
  {
    title: 'List Subscriptions',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListSubscriptionsNoData'
    ),
  },
  {
    title: 'Create a Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscription'
    ),
  },
  {
    title: 'Select a Customer for the Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionSelectCustomer'
    ),
  },
  {
    title: 'Create a Customer and add to Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionCreateCustomer'
    ),
  },
  {
    title: 'Select a Product or Service to be used in the Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionSelectPlan'
    ),
  },
  {
    title: 'Add a new Product or Service and add it to the Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionCreatePlan'
    ),
  },
  {
    title: 'Select Payment Method for the Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionSelectPaymentMethod'
    ),
  },
  {
    title: 'Add a new Payment Method and use it on the Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionCreatePaymentMethod'
    ),
  },
  {
    title: 'Ready to create Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateSubscriptionFormFilled'
    ),
  },
  {
    title: 'List the newly created Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListSubscriptionsWithNewlyCreatedSubscription'
    ),
  },
  {
    title: 'Update Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdateSubscription'
    ),
  },
  {
    title: 'Unable to update Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UpdateSubscriptionErrored'
    ),
  },
  {
    title: 'View Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewSubscription'
    ),
  },
  {
    title: 'Cancel Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewSubscriptionCancelSubscription'
    ),
  },
  {
    title: 'Final warning before cancelling Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewSubscriptionCancelFinalWarning'
    ),
  },
  {
    title: 'Subscription successfully cancelled',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewSubscriptionConfirmationPrompt'
    ),
  },
  {
    title: 'View cancelled Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewSubscriptionCancelled'
    ),
  },
  {
    title: 'Delete Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteSubscription'
    ),
  },
  {
    title: 'List Charges',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListChargesNoData'
    ),
  },
  {
    title: 'Create new Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateCharge'
    ),
  },
  {
    title: 'Select existing Customer for the Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeSelectCustomer'
    ),
  },
  {
    title: 'Create a new Customer and add them to the Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeCreateCustomer'
    ),
  },
  {
    title:
      'Unable to add or select a Payment Method, a Customer must be selected first',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeNoCustomerSelected'
    ),
  },
  {
    title: 'Select an existing Payment Method',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeSelectPaymentMethod'
    ),
  },
  {
    title: 'Add a new Payment Method and add it to the Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeAddPaymentMethod'
    ),
  },
  {
    title: 'Optionally select an Invoice to be charged',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeSelectInvoice'
    ),
  },
  {
    title: 'Ready to create a Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeWithTypeCharge'
    ),
  },
  {
    title: 'Unable to create Charge because Invoice is already paid',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateChargeErroredCannotChargePaidInvoice'
    ),
  },
  {
    title:
      'List newly created Charge, as well as the charge from the Hosted Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListChargesWithNewlyCreatedCharge'
    ),
  },
  {
    title: 'View Charge Summary',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewCharge'
    ),
  },
  {
    title: 'Issue a Refund',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeIssueRefund'
    ),
  },
  {
    title: 'Unable to issue Refund',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeIssueRefundErrored'
    ),
  },
  {
    title:
      'Unable to issue refund due to Refund amount larger than original Charge amount',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeIssueRefundErroredExceedsChargeAmount'
    ),
  },
  {
    title: 'Refund successfully issued',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeIssueRefundSuccess'
    ),
  },
  {
    title: 'View Issued Refunds',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeWithRefund'
    ),
  },
  {
    title: 'View Refund details',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewChargeWithRefundViewRefund'
    ),
  },
  {
    title: 'View Charges with Refunded amount',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListChargesWithNewlyCreatedAuthorization'
    ),
  },
  {
    title: 'View created Authorization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorization'
    ),
  },
  {
    title: 'Cancel an Authorization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorizationCancel'
    ),
  },
  {
    title: 'Authorization successfully cancelled',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorizationCancelSuccess'
    ),
  },
  {
    title: 'View summary of cancelled Authorization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorizationCancelled'
    ),
  },
  {
    title: 'Settle a Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorizationSettle'
    ),
  },
  {
    title: 'Unable to settle Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAuthorizationSettleErroredExceedsAuthorizationAmount'
    ),
  },
  {
    title: 'List Charges',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListChargesWithNewlyCancelledCharge'
    ),
  },
  {
    title: 'Export Charges',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ExportCharges'
    ),
  },
  {
    title: 'Business Profile — Account Information',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileAccountInformation'
    ),
  },
  {
    title: 'Unable to set Account Information',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileAccountInformationErrored'
    ),
  },
  {
    title: 'Account Information successfully updated',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileAccountInformationSuccess'
    ),
  },
  {
    title: 'Business Profile — Branding',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBranding'
    ),
  },
  {
    title: 'Branding Preview displays data from Account Information tab',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingWithAccountInformation'
    ),
  },
  {
    title: 'Set a logo',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingLogoSelected'
    ),
  },
  {
    title: 'Select a colour',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingSelectColour'
    ),
  },
  {
    title: 'Select some more colours',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingPreviewHostedInvoice'
    ),
  },
  {
    title: 'Preview Emailed Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingPreviewingEmail'
    ),
  },
  {
    title: 'Save changes to Branding',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-BusinessProfileBrandingSuccess'
    ),
  },
  {
    title: 'View Branded Hosted Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewBrandedHostingInvoice'
    ),
  },
  {
    title: 'Account Profile',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AccountProfile'
    ),
  },
  {
    title: 'Unable to set Account Profile',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AccountProfileErrored'
    ),
  },
  {
    title: 'List Users in an Organization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagement'
    ),
  },
  {
    title: 'Invite a User to the Organization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementInviteUser'
    ),
  },
  {
    title: 'Unable to invite User',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementInviteUserErrored'
    ),
  },
  {
    title: 'An invite has been sent to the User',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementInviteUserSuccess'
    ),
  },
  {
    title: 'Check your inbox for an invite',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInvite'
    ),
  },
  {
    title: 'Ready to join an Organization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInviteAcceptInvite'
    ),
  },
  {
    title: 'Unable to join Organization due to missing invite code',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInviteAcceptInviteErrored'
    ),
  },
  {
    title: 'Unable to join Organization due to invalid or expired invite code',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInviteAcceptInviteErroredCodeExpired'
    ),
  },
  {
    title: 'Successfully joined Organization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInviteSuccess'
    ),
  },
  {
    title: 'Check list of Organizations',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-AcceptOrganizationInviteListOrganizations'
    ),
  },
  {
    title: 'Change the role of a User in the Organization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementEditMembership'
    ),
  },
  {
    title: 'Remove User from the Organization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementDeleteMembership'
    ),
  },
  {
    title: 'User removed from the Organization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-UserManagementDeleteMembershipSuccess'
    ),
  },
  {
    title: 'View Audit Logs',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListAuditLog'
    ),
  },
  {
    title: 'List Developer Keys',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListKeysNoData'
    ),
  },
  {
    title: 'Create a new Key',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateKey'
    ),
  },
  {
    title: 'Unable to create Key',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateKeyErrored'
    ),
  },
  {
    title: 'Key successfully created',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-CreateKeySuccess'
    ),
  },
  {
    title: 'List newly created Key',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ListKeysWithData'
    ),
  },
  {
    title: 'Delete Key',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteKey'
    ),
  },
  {
    title: 'Key successfully deleted',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-DeleteKeySuccess'
    ),
  },
  {
    title: 'Documentation page',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesHome'
    ),
  },
  {
    title: 'Integration Guide — Accept Payments',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesAcceptPayments'
    ),
  },
  {
    title: 'Integration Guide —  Save a Card',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesSaveCard'
    ),
  },
  {
    title: 'Integration Guide — Create an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesCreateInvoice'
    ),
  },
  {
    title: 'Integration Guide — Accept a Deposit',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesAcceptDeposit'
    ),
  },
  {
    title: 'Integration Guide — Create Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesCreateSubscription'
    ),
  },
  {
    title: 'Integration Guide — Modify Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesModifySubscription'
    ),
  },
  {
    title: 'Integration Guide — Send Hosted Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesSendHostedInvoice'
    ),
  },
  {
    title: 'Integration Guide — Send Recurring Hosted Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-IntegrationGuidesSendRecurringInvoice'
    ),
  },
  {
    title: 'API Reference — Introduction',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceIntroduction'
    ),
  },
  {
    title: 'API Reference — Authentication',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceAuthentication'
    ),
  },
  {
    title: 'API Reference — Pagination',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferencePagination'
    ),
  },
  {
    title: 'API Reference — Common Errors',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCommonErrors'
    ),
  },
  {
    title: 'API Reference — Create Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateCustomer'
    ),
  },
  {
    title: 'API Reference — Get Customers',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetCustomers'
    ),
  },
  {
    title: 'API Reference — Get a Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificCustomer'
    ),
  },
  {
    title: 'API Reference — Update a Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdateCustomer'
    ),
  },
  {
    title: 'API Reference — Delete a Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeleteCustomer'
    ),
  },
  {
    title: 'API Reference — Create Plan',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreatePlan'
    ),
  },
  {
    title: 'API Reference — Get Plans',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetPlans'
    ),
  },
  {
    title: 'API Reference — Get a Plan',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificPlan'
    ),
  },
  {
    title: 'API Reference — Update a Plan',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdatePlan'
    ),
  },
  {
    title: 'API Reference — Delete a Plan',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeletePlan'
    ),
  },
  {
    title: 'API Reference — Create Payment Source',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreatePaymentSource'
    ),
  },
  {
    title: 'API Reference — Get Payment Sources',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetPaymentSources'
    ),
  },
  {
    title: 'API Reference — Get a Payment Source',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificPaymentSource'
    ),
  },
  {
    title: 'API Reference — Update a Payment Source',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdatePaymentSource'
    ),
  },
  {
    title: 'API Reference — Delete a Payment Source',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeletePaymentSource'
    ),
  },
  {
    title: 'API Reference — Create Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateInvoice'
    ),
  },
  {
    title: 'API Reference — Get Invoices',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetInvoices'
    ),
  },
  {
    title: 'API Reference — Get an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificInvoice'
    ),
  },
  {
    title: 'API Reference — Update an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdateInvoice'
    ),
  },
  {
    title: 'API Reference — Delete an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeleteInvoice'
    ),
  },
  {
    title: 'API Reference — Finalize an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceFinalizeInvoice'
    ),
  },
  {
    title: 'API Reference — Send an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceSendInvoice'
    ),
  },
  {
    title: 'API Reference — Mark Invoice as Uncollectible',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceMarkInvoiceAsUncollectible'
    ),
  },
  {
    title: 'API Reference — Void an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceVoidInvoice'
    ),
  },
  {
    title: 'API Reference — Create Invoice Line Item',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateLineItem'
    ),
  },
  {
    title: 'API Reference — Get Invoice Line Items',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetLineItems'
    ),
  },
  {
    title: 'API Reference — Get an Invoice Line Item',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificLineItem'
    ),
  },
  {
    title: 'API Reference — Update an Invoice Line Item',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdateLineItem'
    ),
  },
  {
    title: 'API Reference — Delete an Invoice Line Item',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeleteLineItem'
    ),
  },
  {
    title: 'API Reference — Create a Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateSubscription'
    ),
  },
  {
    title: 'API Reference — Get Subscriptions',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSubscriptions'
    ),
  },
  {
    title: 'API Reference — Get a Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificSubscription'
    ),
  },
  {
    title: 'API Reference — Update a Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceUpdateSubscription'
    ),
  },
  {
    title: 'API Reference — Delete a Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceDeleteSubscription'
    ),
  },
  {
    title: 'API Reference — Cancel a Subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCancelSubscription'
    ),
  },
  {
    title: 'API Reference — Create a Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateCharge'
    ),
  },
  {
    title: 'API Reference — Get Charges',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetCharges'
    ),
  },
  {
    title: 'API Reference — Get a Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificCharge'
    ),
  },
  {
    title: 'API Reference — Capture a Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCaptureCharge'
    ),
  },
  {
    title: 'API Reference — Cancel a Charge',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCancelCharge'
    ),
  },
  {
    title: 'API Reference — Create a Refund',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateRefund'
    ),
  },
  {
    title: 'API Reference — Get Refunds',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetRefunds'
    ),
  },
  {
    title: 'API Reference — Get a Refund',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificRefund'
    ),
  },
  {
    title: 'API Reference — Create a Token',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceCreateToken'
    ),
  },
  {
    title: 'API Reference — Get a Token',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-APIReferenceGetSpecificToken'
    ),
  },
  {
    title: 'Organization Selector',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SelectOrg'
    ),
  },
  {
    title: 'Add a new Organization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SelectOrgAddOrg'
    ),
  },
  {
    title: 'Unable to add new Organization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SelectOrgAddOrgErrored'
    ),
  },
  {
    title: 'Organization successfully added',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SelectOrgAddOrgSuccess'
    ),
  },
  {
    title: 'List newly created Organization',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SelectOrgListOrgs'
    ),
  },
  {
    title: 'Organization Management — List Organizations',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementListOrgs'
    ),
  },
  {
    title: 'View Organization Onboarding Summary',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementOnboardingSummary'
    ),
  },
  {
    title: 'Set the Organization Status',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementSetStatus'
    ),
  },
  {
    title: 'Organization Status successfully updated',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementSetStatusSuccess'
    ),
  },
  {
    title: 'View Organization Onboarding Summary with updated Status',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementOnboardingSummaryActiveStatus'
    ),
  },
  {
    title: 'Portico Settings',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementPorticoSettings'
    ),
  },
  {
    title: 'Unable to update Portico Settings',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementPorticoSettingsErrored'
    ),
  },
  {
    title: 'Portico Settings successfully updated',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementPorticoSettingsSuccess'
    ),
  },
  {
    title: 'Organization Onboarding — Business Structure',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingBusinessStructure'
    ),
  },
  {
    title: 'Organization Onboarding — Business Details',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingBusinessDetails'
    ),
  },
  {
    title: 'Organization Onboarding — Business Representative',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingBusinessRepresentative'
    ),
  },
  {
    title: 'Organization Onboarding — Tell Us About Your Business',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingCreditCardStatement'
    ),
  },
  {
    title: 'Organization Onboarding — Bank Details',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingBankDetails'
    ),
  },
  {
    title: 'Organization Onboarding — Summary',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingSummary'
    ),
  },
  {
    title: 'Successfully submitted Organization Onboarding request',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OnboardingSummarySuccess'
    ),
  },
  {
    title: 'Organization Management — Review Organization Onboarding',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementOnboardingSummaryPending'
    ),
  },
  {
    title: 'List Organizations',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-OrgManagementListOrgsWithPendingStatus'
    ),
  },
  {
    title: 'View Analytics',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-ViewAnalytics'
    ),
  },
  {
    title: 'Send Verification Email',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SendVerificationEmail'
    ),
  },
  {
    title: 'Verification Email successfully sent',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-SendVerificationEmailSuccess'
    ),
  },
  {
    title: 'Verify Email Address',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-VerifyEmailAddress'
    ),
  },
  {
    title: 'Unable to Verify Email Address',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-VerifyEmailAddressErrored'
    ),
  },
  {
    title: 'Email Address successfully Verified',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-VerifyEmailAddressSuccess'
    ),
  },
  {
    title: 'Log Out',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-Dashboard-LogOutPrompt'
    ),
  },
  {
    title: 'Successfully logged out',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-Logout'
    ),
  },
  {
    title: 'Sign up for an account',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-Signup'
    ),
  },
  {
    title: 'Unable to Sign Up for an account',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-SignupErrored'
    ),
  },
  {
    title: 'Successfully Signed Up for an account',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-SignupSuccess'
    ),
  },
  {
    title: 'Log In to your account',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-Login'
    ),
  },
  {
    title: 'Unable to Log In to your account',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-LoginErrored'
    ),
  },

  {
    title: 'Forgot Password',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ForgotPassword'
    ),
  },
  {
    title: 'Unable to send Password Reset link',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ForgotPasswordErrored'
    ),
  },
  {
    title: 'Successfully sent Password Reset link',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ForgotPasswordSuccess'
    ),
  },
  {
    title: 'Reset Password',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ResetPassword'
    ),
  },
  {
    title: 'Unable to Reset Password',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ResetPasswordErrored'
    ),
  },
  {
    title: 'Ready to Reset Password',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ResetPasswordFormFilled'
    ),
  },
  {
    title: 'Successfully Reset Password',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-DesktopDesign-PublicPage-ResetPasswordSuccess'
    ),
  },
  {
    title: '(Mobile Design) Sign Up for an account',
    src: loadStaticAsset('ProjectScreenshot-PMPGateway-MobileDesign-Signup'),
  },
  {
    title: '(Mobile Design) Successfully Signed Up for an account',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-SignupSuccess'
    ),
  },
  {
    title: '(Mobile Design) Log In to your account',
    src: loadStaticAsset('ProjectScreenshot-PMPGateway-MobileDesign-Login'),
  },
  {
    title: '(Mobile Design) Dashboard home',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-DashboardHome'
    ),
  },
  {
    title: '(Mobile Design) Expanded Navigation Bar',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-ExpandSidebar'
    ),
  },
  {
    title: '(Mobile Design) List Invoices',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-ListInvoices'
    ),
  },
  {
    title: '(Mobile Design) Create an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-CreateInvoice'
    ),
  },
  {
    title: '(Mobile Design) Add a Customer to Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-CreateInvoiceSelectCustomer'
    ),
  },
  {
    title: '(Mobile Design) Select a Customer and add to Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-EditInvoiceSelectCustomer'
    ),
  },
  {
    title: '(Mobile Design) Edit Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-EditInvoice'
    ),
  },
  {
    title: '(Mobile Design) Add Invoice Line Item',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-AddInvoiceLineItem'
    ),
  },
  {
    title: '(Mobile Design) Invoice successfully updated',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-EditInvoiceUpdated'
    ),
  },
  {
    title: '(Mobile Design) Finalize Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-FinalizeInvoice'
    ),
  },
  {
    title: '(Mobile Design) View finalized Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-ViewInvoice'
    ),
  },
  {
    title: '(Mobile Design) View Hosted Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-MobileDesign-ViewHostedInvoice'
    ),
  },
  {
    title: '(Tablet Design) Sign Up for an account',
    src: loadStaticAsset('ProjectScreenshot-PMPGateway-TabletDesign-Signup'),
  },
  {
    title: '(Tablet Design) Successfully Signed Up for an account',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-TabletDesign-SignupSuccess'
    ),
  },
  {
    title: '(Tablet Design) Log In to your account',
    src: loadStaticAsset('ProjectScreenshot-PMPGateway-TabletDesign-Login'),
  },
  {
    title: '(Tablet Design) Dashboard home',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-TabletDesign-DashboardHome'
    ),
  },
  {
    title: '(Tablet Design) List Customers',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-TabletDesign-ListCustomers'
    ),
  },
  {
    title: '(Tablet Design) Create an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-TabletDesign-CreateInvoice'
    ),
  },
  {
    title: '(Tablet Design) Select a Customer',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-TabletDesign-CreateInvoiceSelectCustomer'
    ),
  },
  {
    title: '(Tablet Design) Edit an Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-TabletDesign-UpdateInvoice'
    ),
  },
  {
    title: '(Tablet Design) View finalized Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-TabletDesign-ViewInvoice'
    ),
  },
  {
    title: '(Tablet Design) View Branded Hosted Invoice',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPGateway-TabletDesign-ViewHostedInvoice'
    ),
  },
];

// Technologies used.
const technologiesUsed = [
  technologyEnums.html5,
  technologyEnums.javascript,
  technologyEnums.css3,
  technologyEnums.react,
  technologyEnums.reactRouter,
  technologyEnums.redux,
  technologyEnums.sass,
  technologyEnums.eslint,
  technologyEnums.stylelint,
  technologyEnums.docker,
  technologyEnums.webpack,
  technologyEnums.babel,
  technologyEnums.git,
];

/**
 * Project Details page for the Pricematepay Gateway Dashboard.
 *
 * @returns {React.Component} Details page.
 */
const PricematepayGatewayDashboardProjectDetailsPage = () => (
  <Page>
    <Helmet>
      <title>Pricematepay Gateway Dashboard &mdash; Project Details</title>
    </Helmet>

    <GlobalStyle />

    <Margin>
      <Section>
        <H1 textAlign="center" marginTop="0px">
          Pricematepay Gateway Dashboard
        </H1>
      </Section>

      <Section>
        <H2>What is the Pricematepay Gateway Dashboard?</H2>
        <p>
          The Pricematepay Gateway Dashboard is a web application built around
          our Payment Gateway API. It facilitates credit card payments for
          Organizations and allows their clients and customers to pay Invoices
          using Hosted Invoices and the Virtual Terminal.
        </p>
        <p>
          The Gateway API also allows for Authorizations, Refunds, and Recurring
          Charges (Subscriptions).
        </p>
      </Section>

      <Section>
        <H2>Technologies Used</H2>

        <ContainerGrid>
          <TechnologiesGrid>
            {technologiesUsed.map(item => (
              <TechnologyLogo
                key={item}
                technologyEnum={item}
                iconHeight="50px"
                maxIconHeight="50px"
              />
            ))}
          </TechnologiesGrid>
        </ContainerGrid>
      </Section>

      <Section>
        <H2>Screenshots</H2>

        <ImageCarousel images={images} />
      </Section>
    </Margin>
  </Page>
);

export default PricematepayGatewayDashboardProjectDetailsPage;
