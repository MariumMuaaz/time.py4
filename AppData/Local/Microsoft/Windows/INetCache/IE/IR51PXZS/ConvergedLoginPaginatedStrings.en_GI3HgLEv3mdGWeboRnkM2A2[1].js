!function(e){function o(i){if(n[i])return n[i].exports;var t=n[i]={exports:{},id:i,loaded:!1};return e[i].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}var n={};return o.m=e,o.c=n,o.p="",o(0)}([function(e,o,n){var i=n(1),t=n(5),r=n(4),a=t.StringsVariantId;i.registerSource("str",function(e,o){switch(e.MOBILE_STR_Header_Brand="Microsoft account",e.CT_STR_CookieBanner_Link_AriaLabel="Learn more about Microsoft's Cookie Policy",o.A1){case a.CombinedSigninSignup:e.WF_STR_HeaderDefault_Title="Hi there!";break;case a.CombinedSigninSignupV2WelcomeTitle:e.WF_STR_HeaderDefault_Title="Welcome";break;default:e.WF_STR_HeaderDefault_Title=o.DD}if(o.b&&o.b.friendlyAppName){var n=o.CA?"to continue to {0}":"Continue to {0}";e.WF_STR_App_Title=r.format(n,o.b.friendlyAppName)}switch(o.A1){case a.SkypeMoveAlias:e.WF_STR_Default_Desc="To continue, verify the password for your Microsoft account.";break;case a.CombinedSigninSignup:case a.CombinedSigninSignupDefaultTitle:e.WF_STR_Default_Desc='This works with Microsoft accounts. Let\'s see if you have one. <a href="#" id="learnMoreLink" target="_top">What\'s this?</a>';break;case a.RemoteConnectLogin:e.WF_STR_Default_Desc='Take the adventure online and play with your friends using your Microsoft account to sign in to {0}. <a href="#" id="learnMoreLink" target="_top">What\'s this?</a>';break;case a.CombinedSigninSignupV2:e.WF_STR_Default_Desc="We'll check to see if you already have a Microsoft account.";break;case a.CombinedSigninSignupV2WelcomeTitle:e.WF_STR_Default_Desc="Let's see if you already have an account with us."}!o.b||o.A1===a.RemoteConnectLogin&&o.A1===a.SkypeMoveAlias||(o.b.signinTitle&&(e.WF_STR_HeaderDefault_Title=o.b.signinTitle),o.b.signinDescription&&(e.WF_STR_Default_Desc=o.b.signinDescription)),e.CT_STR_Page_Title="Let's add your Microsoft account",e.CT_STR_Page_SubTitle="One account connects your device across Microsoft apps and services, like Office, OneDrive, Microsoft Edge, and the Microsoft Store.",e.WF_STR_LearnMoreLink_Text="What's this?",e.WF_STR_ProgressText="Please wait",e.WF_STR_ThisIsntMyNumber_Text="This isn't my number",e.WF_STR_SignupLink_AriaLabel_Text="Create a Microsoft account",e.WF_STR_ForgotUsernameLink_Text="Forgot username",e.CT_STR_More_Options_Ellipsis_AriaLabel="Click here for troubleshooting information",e.CT_STR_Error_Details_Close_AltText="Close troubleshooting details",e.CT_STR_Error_PasswordRequired="Signing in to this device requires a password on your account. Visit {0} to add a password to your account. After adding a password, come back to sign in to this device.",e.CT_STR_Error_FedUserNotFound_LinkedIn="The LinkedIn account you signed in with doesn't match the LinkedIn account we expected. Please sign in again.",e.CT_STR_Error_FedUserNotFound_Google="The Google account you signed in with doesn't match the Google account we expected. Please sign in again.",e.CT_STR_Error_FedUserNotFound_GitHub="The GitHub account you signed in with doesn't match the GitHub account we expected. Please sign in again.",e.MOBILE_STR_Footer_Microsoft="Microsoft",e.MOBILE_STR_Footer_Privacy="Privacy & cookies",e.MOBILE_STR_Footer_Terms="Terms of use",e.WF_STR_Footer_LinkDisclaimer_Text="Link Disclaimer",e.STR_Error_Details_Title="Troubleshooting details",e.STR_Error_Details_Instruction="If you contact your administrator, send this info to them.",e.STR_Error_Details_CopyLink="Copy info to clipboard",e.STR_Error_Details_Notification="Copied",e.STR_Error_Details_Notification_ScreenReader="Copied troubleshooting info to clipboard",e.WF_STR_GenericError_Title="Something went wrong and we can't sign you in right now. Please try again later.",e.CT_PWD_STR_Email_Example=o.C8?"Skype, phone, or email":"Email, phone, or Skype",e.CT_PWD_STR_Username_AriaLabel="Enter your email, phone, or Skype.",e.CT_STR_CountryCodeError=o.fImprovePhoneDisambig?"We need your help to look up an account with this username.":"Please verify your country code and phone number.",e.CT_PWD_STR_PwdTB_Label="Password",e.CT_PWD_STR_PwdTB_AriaLabel="Enter the password for {0}",e.CT_WPIL_STR_Android_UseDifferentAddress="Use a different account",e.CT_PWD_STR_ForgotPwdLink_Text="Forgot password?",e.CT_PWD_STR_ForgotPwdLink_SplitterText="What kind of account do you have?",e.CT_PWD_STR_KeepMeSignedInCB_Text="Keep me signed in",e.CT_PWD_STR_SignIn_Button="Sign in",e.CT_PWD_STR_SignIn_Button_Next="Next",e.CT_PWD_STR_SwitchToOTC_Link="Sign in with a single-use code",e.CT_PWD_STR_SwitchToRemoteNGC_Link="Use my Microsoft Authenticator app",e.CT_PWD_STR_SignUp_MenuLink="Create an account",e.CT_PWD_STR_Error_InvalidUsername="Enter a valid email address, phone number, or Skype name.",e.CT_PWD_STR_Error_GetCredentialTypeError="There was an issue looking up your account. Tap Next to try again.",e.CT_PWD_STR_Error_InvalidPhoneNumber=o.fImprovePhoneDisambig?"This phone number does not exist as a username. Please check if your number is correct.":"That phone number doesn't look right. Please check the country code and phone number.",e.CT_PWD_STR_Error_InvalidPhoneFormatting="The phone number you entered isn't valid. Your phone number can contain numbers, spaces, and these special characters: ( ) [ ] . - # * /",e.CT_PWD_STR_Error_MissingPassword="Please enter the password for your Microsoft account.",e.CT_PWD_STR_Error_FedNotAllowed="You cannot use this account for this purpose because it belongs to an organization. Please choose a different account or sign up for a new one.",e.CT_PWD_STR_Error_UsernameNotExist=o.At?'That Microsoft account doesn\'t exist. Enter a different account or <a href="#~#WLSignUpURL_LS#~#" id="idA_PWD_SignUp">get a new one</a>.':"That Microsoft account doesn't exist. Please enter a different account.",e.CT_PWD_STR_PersistentCookies_Warning="Your account will be remembered on this device.",e.CT_PWD_STR_ShowPasswordAriaLabel="Check box to show your password in plain text",e.CT_PWD_STR_ShowPasswordLabel="Show password",e.CT_PWD_STR_Error_AliasDisabled='This username has been turned-off for sign in. Try a different one or <a id="recoverUsername" href="#">find the account this username is associated with</a>.',e.CT_PWD_STR_Signup_Link="Create an account",e.CT_FED_STR_ChangeUserLink_Text="Sign in with a different Microsoft account",e.CT_FED_STR_GoThereLink_Text="Sign in at #~#partnerdomain#~#",e.WF_STR_ForceSI_Info="Because you're accessing sensitive info, you need to verify your password.",e.WF_STR_SwitchUser_Title="You're already signed in.",e.WF_STR_SwitchUser_Stay="Remain signed in with this account.",e.WF_STR_SwitchUser_Switch="Sign out and sign in with a different account.",e.WF_STR_Switch_SignOutDesc="(You will be signed out of all Microsoft services you are using currently with your #~#FederatedDomainName_LS#~# account.)",e.WF_STR_Switch_DifferentID="Sign in with a different Microsoft account",e.WF_STR_InviteBlocked_Error="Sorry, you can't use your #~#FederatedDomainName_LS#~# account to sign in here.",e.WF_STR_ServiceBlocked_Error="Sorry, we can't sign you in here with your #~#FederatedDomainName_LS#~# account.",e.WF_STR_IDPFailed_GenericError="Your organization could not sign you in to this service.",e.WF_STR_IDPFailed_Error="#~#FederatedPartnerName_LS#~# could not sign you in here.",e.WF_STR_IDPFailed_Desc1="Your #~#FederatedDomainName_LS#~# account may not be enabled to use this service or there may be a system error at #~#FederatedPartnerName_LS#~#.",e.WF_STR_IDPFailed_Desc2=" Please try again later, and contact the administrator at #~#FederatedPartnerName_LS#~# if this problem persists.",e.WF_STR_IDPFailed_GenericDesc="Please try again later, and contact the administrator at your organization if this problem persists.",e.WF_STR_BindFailed_Title="Account unavailable",e.MOBILE_STR_SignIn_MSAcctHelpHeading="What is a Microsoft account?",e.MOBILE_STR_SignIn_MSAcctHelpDesc="A Microsoft account is what you use to sign in to Microsoft services such as Outlook.com, Skype, OneDrive, Office, Xbox, Windows and more. Sign in for your personalized experience.",e.MOBILE_STR_SignIn_MSAcctHelpDone_Button="OK",e.CT_HIP_ID_P_HipLockout_Info="Help us make sure you're not a robot.",e.CT_HIP_STR_HIP_ISLOADING="Loading ...",e.WF_STR_Lockout_AnotherID_Text="Sign in using another Microsoft account",e.WF_STR_Lockout_Title="Sign-in is blocked",e.WF_STR_Lockout_Desc="Sign-in with <b>#~#MemberName_LS#~#</b> is blocked for one of these reasons:",e.WF_STR_Lockout_Reason1="Someone entered the wrong password too many times.",e.WF_STR_Lockout_Reason2="If you signed up for this account through an organization, you might not be able to use it yet.",e.WF_STR_Lockout_Reset_Text="Reset your password",e.WF_STR_HIP_Label="Enter these characters",e.WF_STR_HIPAudio_Label="Enter the characters you hear",e.CT_PWD_STR_Continue_Button="Continue",e.CT_PWD_STR_ContinueBtn_Tooltip="You are signed in on this computer with this Microsoft account.",e.CT_PWD_STR_SignedIn_Label="You're already signed in",e.CT_HRD_STR_Splitter_Heading="It looks like this email is used with more than one account from Microsoft. Which one do you want to use?",e.CT_HRD_STR_Splitter_Error_Heading="We're having trouble locating your account. Which type of account do you want to use?",e.CT_HRD_STR_Splitter_AadTile_Title="Work or school account",e.CT_HRD_STR_Splitter_AadTile_Hint="Created by your IT department",e.CT_HRD_STR_Splitter_MsaTile_Title="Personal account",e.CT_HRD_STR_Splitter_MsaTile_Hint="Created by you",e.CT_HRD_STR_Redirect_Title_LinkedIn="Redirecting you to LinkedIn to sign in...",e.CT_HRD_STR_Redirect_Title_GitHub="Redirecting you to GitHub to sign in...",e.CT_HRD_STR_Redirect_Title_Google="Redirecting you to Google to sign in...",e.CT_HRD_STR_Redirect_Title_MoreOptions_LinkedIn="Sign in on LinkedIn",e.CT_HRD_STR_Redirect_Title_MoreOptions_GitHub="Sign in on GitHub",e.CT_HRD_STR_Redirect_Title_MoreOptions_Google="Sign in on Google",e.CT_HRD_STR_Redirect_Desc_LinkedIn="Since your Microsoft account is backed by LinkedIn credentials, we'll send you to LinkedIn to sign in.",e.CT_HRD_STR_Redirect_Desc_GitHub="Since your Microsoft account is backed by GitHub credentials, we'll send you to GitHub to sign in.",e.CT_HRD_STR_Redirect_Desc_Google="Since your Microsoft account is backed by Google credentials, we'll send you to Google to sign in.",e.CT_HRD_STR_Splitter_Back="Back",e.CT_HRD_STR_Redirect_Title="Taking you to your organization's sign-in page",e.CT_HRD_STR_Redirect_Cancel="Cancel",e.WF_STR_FIDO_ReAuthUserPrompt="Use your PIN or Windows Hello to prove you own {0}",e.CT_IL_STR_Error_OldSkypePwd="Your old Skype password doesn't work anymore. Try the password for your Microsoft account.",e.CT_PWD_STR_EnterPassword_Title=o.b&&o.b.signinPasswordTitle||"Enter password",e.CT_PWD_STR_RemoteConnect_PasswordPage_Desc="Enter the password to sign in to {0} with {1}",e.CT_OTC_STR_SignIn_ReSendInfo="It may take a few minutes for the code to arrive. Are you sure you want to request a new code?",e.CT_OTC_STR_YesButton_Text="Yes",e.CT_OTC_STR_NoButton_Text="No",e.CT_OTC_STR_EnterCode_Title="Enter code",e.CT_OTC_STR_EnterCode_Desc="Enter the code we sent to {0}.",e.CT_OTC_STR_EnterCode_Text="Code",e.CT_OTC_STR_EnterCode_AriaLabel="Enter the code you received",e.CT_OTC_STR_Error_EmptyCode="To continue, enter the code we just sent you.",e.CT_OTC_STR_Error_CodeIncorrect="That code didn't work. Check the code and try again.",e.CT_OTC_STR_Error_ServerError="This service isn't available right now. Please try again later.",e.CT_OTC_STR_Error_OTCInvalid="Please enter the 7-digit code. The code only contains numbers.",e.CT_OTC_STR_Error_SendCodeError="We couldn't send the code. Please try again.",e.CT_OTC_STR_SMSTextbox_Label2="Phone number",e.CT_OTC_STR_SMSTextbox_AriaLabel="Enter your phone number",e.CT_OTC_STR_Error_FlowExpired="We couldn't send the code. Please refresh your browser and try again.",e.CT_OTC_STR_HaveCode="I have a code",e.CT_OTC_STR_SwitchToOtc_EmailLink="Email code to {0}",e.CT_OTC_STR_SwitchToOtc_SmsLink="Text code to {0}",e.CT_OTC_STR_SwitchToOtc_VoiceLink="Call {0} with a code",e.CT_RNGC_STR_TimeOut_Title="Request timeout",e.CT_RNGC_STR_TimeOut_PageDescription="We sent a sign in request to your Microsoft Authenticator app for {0}, but we didn't get your approval.",e.CT_RNGC_STR_Denied_Title="Request denied",e.CT_RNGC_STR_Denied_PageDescription="We sent a sign in request to your Microsoft Authenticator app for {0}, but you denied it.",e.CT_RNGC_STR_Polling_Title="Approve sign in",e.CT_RNGC_STR_Polling_PageDescription="Approve the request we sent to your phone to sign in.",e.CT_RNGC_STR_Polling_PageDescription_UnfamiliarDevice="Because you set up the Microsoft Authenticator app, tap the number you see here in the app to sign in without a password.",e.CT_RNGC_STR_Polling_Title2="Check Microsoft Authenticator",e.CT_RNGC_STR_Polling_PageDescription2="We sent a sign-in request to your Microsoft Authenticator app. Approve the request to sign in.",e.CT_RNGC_STR_Polling_PageDescription_UnfamiliarDevice2="In your Authenticator app, tap the number shown on this page to sign in without a password.",e.CT_RNGC_STR_ResendNotification_Text="Tap Next to send another request.",e.CT_RNGC_STR_SwitchToPassword_Link="Use your password instead",e.CT_RNGC_STR_Error_Title_SendFail="Request wasn't sent",e.CT_RNGC_STR_Error_SendFail="We couldn't send a notification to your phone at this time. Please try again.",e.CT_RNGC_STR_Request="We couldn't send a notification to your phone at this time. Please try again.",e.CT_RNC_STR_LostAuthenticatorLink_Text="I don't have access to my Microsoft Authenticator app",e.CT_STR_ViewAgreementError="We didn't receive a response. Please try again.",e.CT_STR_ViewAgreement_ExternalLink="For details, please visit this site: {0}",e.WIN10OOBE_STR_OfflineAccount="Offline account",e.CT_STR_ConfirmSend_Otc_ForceSignin="Because you're accessing sensitive info, we'll send a code to {0} to verify your identity.",e.CT_STR_ConfirmSend_Otc_SendError="We couldn't send a code to your phone at this time. Try again later.",e.CT_STR_ConfirmSend_Otc_SendError_Email="We couldn't send a code to your email at this time. Try again later.",e.CT_STR_ConfirmSend_Otc_Email="We'll send a code to {0} to sign you in.",e.CT_STR_ConfirmSend_Otc_SendCode="Send code",e.CT_STR_ConfirmSend_RemoteNgc="We'll send a sign-in request to your phone to sign in with {0}.",e.CT_STR_ConfirmSend_RemoteNgc_ForceSignin="Because you're accessing sensitive info for {0}, we'll send a request to your phone to verify your identity.",e.CT_STR_ConfirmSend_RemoteNgc_SendNotification="Send notification",e.CT_STR_PhoneDisambiguation_Title="Confirm your phone number",e.CT_STR_PhoneCountryCode_AriaLabel="Country Code",e.CT_PWD_STR_CreateNewAccount="Create a new account",e.CT_PWD_STR_PhoneUser_SigninWithDifferentUsername="Sign in with a different username instead",e.CT_STR_CredentialPicker_Title="Choose a way to sign in",e.CT_STR_CredentialPicker_Title_NoUser="Sign-in options",e.CT_STR_CredentialPicker_PersonalAccountsOnly="Personal accounts only",e.CT_STR_CredentialPicker_Option_AuthenticatorApp="Approve a request on my Microsoft Authenticator app",e.CT_STR_CredentialPicker_Option_Fido="Sign in with Windows Hello or a security key",e.CT_STR_CredentialPicker_Option_FidoCrossPlatform="Sign in with a security key",e.CT_STR_CredentialPicker_Option_Fido_KnownUser="Use Windows Hello or a security key",e.CT_STR_CredentialPicker_Option_FidoCrossPlatform_KnownUser="Use a security key",e.CT_STR_CredentialPicker_Option_Help_Fido="Choose this only if you have enabled Windows Hello or a security key for your account.",e.CT_STR_CredentialPicker_Option_Help_FidoCrossPlatform="Choose this only if you have enabled a security key for your account.",e.CT_STR_CredentialPicker_Option_Password="Use my password",e.CT_STR_CredentialPicker_Option_ForgotUsername="Forgot my username",e.CT_STR_CredentialPicker_Help_Desc_GitHub="Learn more about signing in with GitHub",e.CT_STR_CredentialPicker_Help_Desc_Fido="Learn more about signing in with Windows Hello or a security key",e.CT_STR_CredentialPicker_Help_Desc_FidoCrossPlatform="Learn more about signing in with a security key",e.CT_STR_FidoDialog_Desc="Sign in without a username or password by using Windows Hello or a security key.",e.CT_STR_FidoDialog_Desc_CrossPlatform="Sign in without a username or password by using a security key.",e.CT_STR_GitHubDialog_Desc="To use this option, you must have previously linked your personal Microsoft account to a GitHub account.",e.CT_STR_GitHubDialog_Desc2="You can't use this option to access work or school resources.",e.CT_STR_Dialog_CloseButton="Close",e.CT_PWD_STR_SwitchToCredPicker_Link="Other ways to sign in",e.CT_PWD_STR_SwitchToCredPicker_Link_NoUser="Sign-in options",e.CT_PWD_STR_SwitchToCredPicker_Link_EvictedAcct="I no longer own this phone number",e.CT_PWD_STR_SwitchToFido_Link="Sign in with Windows Hello or a security key",e.CT_PWD_STR_SwitchToFidoCrossPlatform_Link="Sign in with a security key",e.CT_PWD_STR_UseLinkedIn_Link="Sign in with LinkedIn",e.CT_PWD_STR_UseGitHub_Link="Sign in with GitHub",e.CT_PWD_STR_UseGoogle_Link="Sign in with Google",e.CT_STR_OptOut_AltText="Close banner",e.CT_FIDO_STR_Page_Title_NoHello="Sign in with a security key",e.CT_FIDO_STR_Page_Title="Sign in with Windows Hello or a security key",e.CT_FIDO_STR_Page_Description="Your PC will open a security window. Follow the instructions there to sign in.",e.CT_FIDO_STR_TryAgain_Button="Try again",e.CT_FIDO_STR_Error_NotFound="We couldn't find a FIDO authenticator.",e.CT_FIDO_STR_Error_NotAllowed="The authentication request was canceled.",e.CT_FIDO_STR_Error_Constraint="We had a problem authenticating you. Please try again.",e.CT_FIDO_STR_Error_Unknown="We had a problem authenticating you. Please try again.",e.WF_STR_Confirm_Signup_Title="Create account",e.WF_STR_Confirm_Signup_Desc="Looks like you're new here. We'll create a new account with {0}.",e.WF_STR_Confirm_Signup_Button="Create account",e.CT_STR_SignupUsername_Email_Placeholder="Email",e.WF_STR_Confirm_Recover_Username_Title="You may already have an account",e.WF_STR_Confirm_Recover_Username_Desc="{0} is already associated with an existing account. Choose 'Back' and enter the username for that account.",e.WF_STR_Confirm_Recover_Username_Instruction="If you don't remember the username for that account, choose 'Next' to recover it.",e.WF_STR_Confirm_Recover_Username_Signup_Link="Create another account",e.CT_FEDCONFLICT_STR_Title="Looks like you already have an account with us",e.CT_FEDCONFLICT_STR_Multi_Desc_LinkedIn="The following account information in your LinkedIn profile is already used for existing Microsoft accounts. Select one to use.",e.CT_FEDCONFLICT_STR_MultiNoAad_Desc_GitHub="The following emails in your GitHub profile are already Microsoft accounts. Choose one to use.",e.CT_FEDCONFLICT_STR_Multi_Desc_GitHub="The following emails in your GitHub profile are already accounts with us. Choose one to use.",e.CT_FEDCONFLICT_STR_Multi_AadHeading="If you're using Azure for your work or school, select one of the following.",e.CT_FEDCONFLICT_STR_Multi_AadHeading_V2="Select one of the following accounts to sign in to your work or school account.",e.CT_FEDCONFLICT_STR_Multi_MsaHeading="Otherwise, select one of the following accounts to sign in to your personal Microsoft account.",e.CT_FEDCONFLICT_STR_Multi_MsaHeading_GitHub="Otherwise, choose one of the following and we'll link it to your GitHub credentials.",e.CT_FEDCONFLICT_STR_UseDifferentEmail_Link="Use a different email address",e.CT_STR_ProofFedConflict_Desc_LinkedIn="The account information ({0}) in your LinkedIn profile is used as a recovery option on an existing Microsoft account.",e.CT_STR_ProofFedConflict_Desc2_LinkedIn="Sign in to this account to verify your identity and complete connecting it to LinkedIn.",e.CT_STR_ProofFedConflict_Multi_Desc_LinkedIn="The following account information in your LinkedIn profile is used as a recovery option on an existing Microsoft account. Sign in to your Microsoft account to verify your identity and complete connecting it to LinkedIn.",e.CT_STR_ProofFedConflict_CreateNew="Create a new account anyway",e.CT_FEDCONFLICT_STR_Title_NoLink="You can't use this account here",e.CT_FEDCONFLICT_STR_Title_NoLink_GitHub="You can't sign in with this GitHub account",e.CT_FEDCONFLICT_STR_Title_AadBinding_GitHub="Let's make sure you get the best of Azure and GitHub",e.CT_FEDCONFLICT_STR_SingleAad_Desc_NoLink_LinkedIn="The email address ({0}) in your LinkedIn profile belongs to your work or school account. You can't use this account to sign in.",e.CT_FEDLINK_STR_Title="Connect your accounts",e.CT_FEDLINK_STR_Title_LinkedIn="UX_Strings_Login_FedLink_Title_LinkedIn",e.CT_FEDLINK_STR_Title_GitHub="Link your GitHub credentials to your Microsoft account",e.CT_FEDLINK_STR_Title_Google="This email is already a Microsoft account",e.CT_FEDLINK_STR_Desc_LinkedIn="To complete connecting your Microsoft and LinkedIn accounts, we'll first need to verify your identity ({0}).",e.CT_FEDLINK_STR_Desc_SingleConflict_LinkedIn="Verify your identity to complete connecting it to LinkedIn.",e.CT_FEDLINK_STR_Desc_GitHub="We'll link your GitHub credentials to this account to let you access it by signing in to GitHub.",e.CT_FEDLINK_STR_Desc2="To set this up, we first need to verify your identity",e.CT_FEDLINK_STR_Desc_Conflict_LinkedIn="The account information ({0}) in your LinkedIn profile is already used for an existing Microsoft account.",e.CT_FEDLINK_STR_Desc_Conflict_Bound_LinkedIn="The account information ({0}) in your LinkedIn profile is already used for an existing Microsoft account. You have also previously connected your Microsoft and LinkedIn accounts.",e.CT_FEDLINK_STR_Desc_Conflict_GitHub="The email ({0}) in your GitHub profile is already a Microsoft account.",e.CT_FEDLINK_STR_Desc_Conflict_Google="We found a Microsoft account for {0}. Sign in with that account or use a different email address to sign up.",e.TILE_STR_Header="Pick an account",e.TILE_STR_UpgradeHeader="Looks like you might already have a Microsoft account",e.TILE_STR_UpgradeDescription="Choose which account you want to upgrade to.",e.TILE_STR_Connected_Samsung="Connected via Samsung Account",e.TILE_STR_UseAnother="Use another account",e.TILE_STR_MsaTileHelpText="Sign in with {0} personal Microsoft account.",e.TILE_STR_Active="Signed in",e.TILE_STR_Signout="Sign out",e.TILE_STR_Signout_Forget="Sign out and forget",e.TILE_STR_Forget="Forget",e.TILE_STR_Signup=o.bd?"Create new account with {0}":"Create a new account",e.TILE_STR_Forget_Error="There was an issue forgetting {0}. Please try again.",e.CAN_STR_RemoteConnect_CanaryValidation_Title="Are you trying to sign in to the {0} app?",e.CAN_STR_RemoteConnect_CanaryValidation_Body="Only continue if you're signing into a device that is displaying this code:",o.Bp&&(e.CT_Win10_STR_OfflineAccountLearnMore="Learn More",o.Cm?e.ConvergedOOBE_STR_LearnMorePageTitle="What is a Microsoft Account?":(e.WIN10OOBE_STR_LearnMorePageTitle="Signing in with a Microsoft account",e.WIN10OOBE_STR_LearnMorePageDesc1="Just sign in and go!",e.WIN10OOBE_STR_LearnMorePageDesc2="Have your favorite apps, settings, security, and preferences follow you to any device when you sign in with your Microsoft account.",e.WIN10OOBE_STR_LearnMorePageDesc3="Signing in with a Microsoft account reduces the number of times you need to enter your username and password while helping secure and safeguard your data. You can also use your Microsoft account to bring your files, photos, and more across your PC, iOS, and Android devices without skipping a beat. Simply sign in once and easily move between your favorite Microsoft services.",e.WIN10OOBE_STR_LearnMorePageDesc4="Good news—if you've used Office365, Xbox Live, OneDrive, or Outlook.com, you may already have a Microsoft account!"))}),i.registerSource("html",function(e,o){e.CT_FED_STR_FedDomainMsg="To sign in to this account you need to go to #~#partnerdomain#~#.",e.CT_OTC_STR_SendCode_SessionExpired='Your session has timed out. To request a single use code, please <a href="#" id="idA_ReloadPage">refresh the page</a>.',e.CT_HRD_STR_Splitter_Rename='Tired of seeing this? <a href="#" id="iDisambigRenameLink">Rename your personal Microsoft account.</a>',e.CT_STR_ConfirmSend_Otc='We\'ll send a code to {0} to sign you in. <a id="phoneDisambigLink" href="#">This isn\'t my number</a>',e.CT_STR_CookieBanner_Text='This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href="#" id="msccLearnMore">Learn more</a>',e.CT_STR_EnvironmentBanner_Text='Microsoft Internal <span id="envBannerNoLink">Do not store any personally identifiable information.</span>',e.WF_STR_SignUpLink_Text='No account? <a href="#" id="signup">Create one!</a>',1===o.cm?(e.CT_PWD_STR_Error_WrongCreds=o.G?"The password is incorrect. Please try again.":'Your account or password is incorrect. If you don\'t remember your password, <a id="idA_IL_ForgotPassword0" href="">reset it now.</a>',e.CT_IHL_STR_Error_WrongHip='Enter your password and the characters correctly. If you don\'t remember your password, <a id="idA_IHL_ForgotPassword0" href="">reset it now.</a>'):(e.CT_PWD_STR_Error_WrongCreds=o.G?"The password is incorrect. Please try again.":'Your account or password is incorrect. If you don\'t remember your password, <a id="idA_IL_ForgotPassword0" href="">continue without a Microsoft account.</a>',e.CT_IHL_STR_Error_WrongHip='Enter your password and the characters correctly. If you don\'t remember your password, <a id="idA_IHL_ForgotPassword0" href="">continue without a Microsoft account.</a>'),e.CT_FEDCONFLICT_STR_MultiNoMsa_Desc_LinkedIn='The following account information in your LinkedIn profile belongs to your work or school. Select one and choose <span id="fedConflictNextText">Next</span> to sign in with your work or school account.',e.CT_FEDCONFLICT_STR_SingleAad_Desc_LinkedIn='The account information <span id="fedConflictName">{0}</span> in your LinkedIn profile belongs to your work or school.',e.CT_FEDCONFLICT_STR_SingleAad_Desc_GitHub='The email <span id="fedConflictName">{0}</span> in your GitHub profile belongs to your work or school. You cannot use GitHub to sign in.',e.CT_FEDCONFLICT_STR_SingleAad_Desc_NoLink_GitHub='The email <span id="fedConflictName">{0}</span> in your GitHub profile is a work or school account. You can\'t use this GitHub account to sign in.',e.CT_FEDCONFLICT_STR_SingleAad_Desc_Binding_GitHub='The email address <span id="fedConflictName">{0}</span> already has access to Azure resources. Sign in with that so you can access both Azure and GitHub.',e.CT_FEDCONFLICT_STR_SingleAad_Desc2='Choose <span id="fedConflictNextText">Next</span> to sign in with your work or school account credentials.',e.CT_FEDCONFLICT_STR_SingleAad_Desc2_V2='Select <span id="fedConflictNextText">Next</span> to sign in with your work or school account.',e.CT_FEDCONFLICT_STR_SingleAad_Desc2_NoLink='Choose <span id="fedConflictNextText">Next</span> to continue with a Microsoft account.',e.CT_FEDCONFLICT_STR_SingleAad_Desc2_NoLink_V2='Select <span id="fedConflictNextText">Next</span> to use a personal Microsoft account. If you don\'t have an account with us, you can create one.',e.CT_FEDLINK_STR_Desc_SingleConflict_Bound='Select <span id="fedConflictNextText">Next</span> to sign in to this account and verify your identity.',e.CT_STR_FidoDialog_Desc2='To use this option, you must have previously set this up on your account. <a id="fidoHelpLink">Learn how to set this up</a>',e.CT_STR_Inline_Legal_Message='Choosing <span id="ftrNext">Next</span> means that you agree to the <a id="ftrTerms" href="#">Microsoft Services Agreement</a> and <a id="ftrPrivacy" href="#">privacy and cookies statement</a>.',o.AW&&(e.CT_STR_Inline_Legal_Message='Choosing <span id="ftrNext">Next</span> means that you agree to the <a id="ftrTerms" href="#">Microsoft Services Agreement</a> and <a id="ftrPrivacy" href="#">Privacy Statement</a>.',e.CT_STR_Inline_Legal_Services_Message='When you sign in with your Microsoft account, we back up your files, so you don\'t have to worry about losing them if something happens to your Windows device. Your settings, files, browsing history, favorites, passwords, contacts, and more, are also synced across devices, apps, and services. <a id="ftrServices" href="#">See how your data is managed</a>.'),o.Bp&&(o.Cm?(e.ConvergedOOBE_STR_LearnMorePageDesc1="<b>One account for all things Microsoft​</b><br>From Outlook to Microsoft Edge, Windows to Xbox, one account connects you across Microsoft. Access all your Microsoft files, apps, and services whenever and wherever.​",e.ConvergedOOBE_STR_LearnMorePageDesc2="<b>Your account, your data. More secure​​</b><br>Keep tabs on your subscriptions and order history, organize your family's digital life, update your privacy and security settings, and track the health and safety of your devices.​",e.ConvergedOOBE_STR_LearnMorePageDesc3="<b>Not sure if you have a Microsoft account?​​​</b><br>You already have a Microsoft account if you use an email address, Skype ID, or mobile number to sign in to Microsoft services like Xbox, Outlook.com, or OneDrive. The email address you use for your Microsoft account can be from Outlook.com, Gmail, Yahoo!, or other providers. If you want to sign in with a local account instead of a Microsoft account after setting up your device, select the <b>Start</b> button and go to <b>Settings > Accounts > Your info</b> and select <b>Sign in with a local account</b>.​"):(e.WIN10OOBE_STR_LearnMorePageDesc5="If you'd prefer not to have a Microsoft account associated with your device, you can remove it. Finish going through Windows setup, then select the <b>Start</b> button and go to <b> Settings > Accounts > Your info </b> and select <b>Sign in with a local account instead</b>.",e.WIN10OOBE_STR_LearnMorePageDesc6='To learn more about your Microsoft account and how Microsoft respects your privacy, see the <a id="idLearnMorePrivacyLink">Privacy Statement</a>.'))}),i.registerSource("proofData",function(e){var o=e[PROOF.Type.AltEmail]=e[PROOF.Type.Email]=e[PROOF.Type.Email]||{};o.CT_OTCC_STR_ProofDescription="We emailed a code to {0}. Please enter the code to sign in.",o.CT_OTCC_STR_ProofDescriptionMatch="If {0} matches the email address on your account, we'll send you a code.",o.CT_OTCC_STR_Error_TooManyInvalidOTC="The wrong code was entered. Send a new code to your email and try again.",o.CT_OTCS_STR_ProofOptionText="Email {0}",o.CT_OTCS_STR_ProofConfirmationTitle="Verify your email",o.CT_OTCS_STR_ProofConfirmationDesc="We will send a verification code to {0}. To verify that this is your email address, enter it below.",o.CT_OTCS_STR_Error_SendCodeServer="We couldn't send the code. Please try again.",o.CT_OTCS_STR_ProofConfirmation_TBHint="someone@example.com",o.CT_OTCS_STR_Error_InvalidProofConfirmation='That doesn\'t match the alternate email associated with your account. The correct email starts with "{1}".',o.CT_OTCS_STR_ProofNextText="Send code";var n=e[PROOF.Type.SMS]=e[PROOF.Type.SMS]||{};n.CT_OTCC_STR_ProofDescription="We texted your phone {0}. Please enter the code to sign in.",n.CT_OTCC_STR_ProofDescriptionMatch="If {0} matches the last 4 digits of the phone number on your account, we'll send you a code.",n.CT_OTCC_STR_Error_TooManyInvalidOTC="The wrong code was entered. Send a new code to your phone and try again.",n.CT_OTCS_STR_ProofOptionText="Text {0}",n.CT_OTCS_STR_ProofConfirmationTitle="Verify your phone number",n.CT_OTCS_STR_ProofConfirmationDesc="We will send a verification code to {0}. To verify that this is your phone number, enter the last 4 digits including {1}.",n.CT_OTCS_STR_ProofConfirmation_TBHint="Last 4 digits of phone number",n.CT_OTCS_STR_Error_SendCodeServer="We couldn't send the code. Please try again.",n.CT_OTCS_STR_Error_InvalidProofConfirmation="That doesn't match the phone number associated with your account. The correct number ends in {1}.",
n.CT_OTCS_STR_ProofNextText="Send code";var i=e[PROOF.Type.Voice]=e[PROOF.Type.Voice]||{};i.CT_OTCC_STR_ProofDescription="We called your phone {0}. Please enter the code to sign in.",i.CT_OTCC_STR_ProofDescriptionMatch="If {0} matches the last 4 digits of the phone number on your account, we'll call you with a code.",i.CT_OTCC_STR_Error_TooManyInvalidOTC="The wrong code was entered. Send a new code to your phone and try again.",i.CT_OTCS_STR_ProofOptionText="Call {0}",i.CT_OTCS_STR_ProofConfirmationTitle="Verify your phone number",i.CT_OTCS_STR_ProofConfirmationDesc="We will send a verification code to {0}. To verify that this is your phone number, enter the last 4 digits including {1}.",i.CT_OTCS_STR_ProofConfirmation_TBHint="Last 4 digits of phone number",i.CT_OTCS_STR_Error_SendCodeServer="We couldn't send the code. Please try again.",i.CT_OTCS_STR_Error_InvalidProofConfirmation="That doesn't match the phone number associated with your account. The correct number ends in {1}.",i.CT_OTCS_STR_ProofNextText="Send code"})},function(e,o){function n(){var e=this,o={};e.registerSource=function(e,n){o[e]=o[e]||[],o[e].push(n)},e.getStrings=function(e,n){for(var i={},t=o[e]||[],r=0,a=t.length;r<a;r++)t[r](i,n);return i}}var i=window;i.StringRepository=e.exports=i.StringRepository||new n},,,function(e,o){e.exports={format:function(e){if(e)for(var o=1;o<arguments.length;o++)e=e.replace(new RegExp("\\{"+(o-1)+"\\}","g"),arguments[o]);return e}}},function(e,o){o.Tokens={Username:"#~#MemberName_LS#~#"},o.Fed={DomainToken:"#~#partnerdomain#~#",FedDomain:"#~#FederatedDomainName_LS#~#",Partner:"#~#FederatedPartnerName_LS#~#"},o.LoginOption={DoNotRemember:0,RememberPWD:1,NothingChecked:3},o.StringsVariantId={Default:0,SkypeMoveAlias:1,CombinedSigninSignup:2,CombinedSigninSignupDefaultTitle:3,RemoteConnectLogin:4,CombinedSigninSignupV2:5,CombinedSigninSignupV2WelcomeTitle:6},o.AllowedIdentitiesType={MsaOnly:0,AadOnly:1,Both:2},o.SessionIdp={Aad:0,Msa:1},o.ClientTracingEventIds={Event_LoginPaginatedUsernameView_onLoad:11e4,Event_LoginPaginatedPasswordView_onLoad:110001,ComponentEvent_LoginPaginatedUsernameView_onShowDialog:12e4,ComponentEvent_LoginPaginatedUsernameView_onAgreementClick:120001,ComponentEvent_LoginPaginatedPasswordView_onResetPassword:120100,PropertyValue_LoginPaginatedPageView_IsFidoSupported:14e4,PropertyValue_LoginPaginatedUsernameView_Username:140100,PropertyValue_LoginPaginatedUsernameView_ClientError:140101,PropertyValue_LoginPaginatedPasswordView_Password:140200,PropertyValue_LoginPaginatedPasswordView_ClientError:140201,PropertyValue_LoginPaginatedPasswordView_KMSI:140202}}]),window.__ConvergedLoginPaginatedStrings=!0;