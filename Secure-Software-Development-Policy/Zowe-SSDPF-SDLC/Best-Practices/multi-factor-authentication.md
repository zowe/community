# Background
The Zowe project, as part of it's efforts in aligning with the [CII Best Practice badge recommendations](https://bestpractices.coreinfrastructure.org/en/projects/2226?criteria_level=2#require_2FA) is requiring that every committer to a Zowe sub-project has Two Factor Authentication (2FA) enabled on thier GitHub account. The idea is that by needing an additional credential, especially one that is personalized rather than a string of characters like a traditional password, then it's much less likely that your account would be vulnerable to breach by a malicious third party.

# Using 2FA with Github
GitHub has implimented 2FA using industry standard methods. More details on this are at https://help.github.com/en/articles/about-two-factor-authentication. 

## When Is It Used on GitHub?
GitHub will periodically ask for your 2FA.  GitHub attempts to be unobtrusive by asking for re-authentication only under circumstances that are unusual. It does not seem that the rules GitHub uses for this are published,  but it seems to be a process based on a combination of time since last accessed and fingerprinting techniques such as IP address, cookies, browser user agent, etc. If you use the same browser, and the same computer in the same building, you're unlikely to see the 2FA prompt daily, perhaps not even weekly.

## How to Activate Two Factor Authentication
GitHub provides instructions for setting up 2FA in your account at https://help.github.com/en/articles/configuring-two-factor-authentication.

## Types of 2FA for GitHub
As of this writing, GitHub offers two methods of 2FA: getting a code by SMS to your mobile phone, or using a TOTP program.

### SMS Authentication
As a way to prove your identity, GitHub can send a code to your mobile phone via SMS. 

This is convenient, but may be an additional charge to your phone plan and could expose your phone number in the case of a data breach of GitHub or whichever company handles this feature. At the time of this writing no such breach is known.

### TOTP Programs
TOTP is a protocol for time-based one time passwords. Its specification is here: https://tools.ietf.org/html/rfc6238

Once setting up the info needed to generate a TOTP credential, a TOTP program will generate a code that is periodically changed such that only github and you should know it. However, these credentials must still be kept as secured as any other password as they are not tied to something personal like biometrics or SMS.

It's also important that the program used be on a device that has an accurate clock, since the algorithm is time based and being too out of sync with GitHub could cause authentication failure.

For this reason, mobile apps or hardware keys are preferred.

#### List of TOTP Programs
Github recommends a few, 

* 1Password
* Authy
* LastPass Authenticator

These will work well, but are either not free, tied to your phone number, or are not open source.
If you wish to use free & open source TOTP programs instead, below are a few suggestions:

PC: 
- KeePass with TOTP Plugins (See https://keepass.info/plugins.html)

Android:
- Several from f-droid
- Aegis: https://f-droid.org/en/packages/com.beemdevelopment.aegis/
- FreeOTP: https://f-droid.org/packages/org.fedorahosted.freeotp/

And many more... https://search.f-droid.org/?q=auth

iOS:
- tofu: https://www.tofuauth.com/
- FreeOTP: https://freeotp.github.io/

Please reach out if you know of other Apps that worked well for you and you would like to see on this list.

#### Setup of TOTP programs
GitHub will provide a QR code to scan in the settings needed, but otherwise if done manually only a few things are needed:
- Cipher: SHA1 is the default
- Digits: 6
- Seconds until renewal: 30
- And the secret, which GitHub provides at time of setup

### Recovery
In the case that your 2FA method stops working, you do not want to be locked out of your account. So, upon setup GitHub will provide you with recovery keys. You should keep these safe as these are needed in that emergency in which your 2FA isn't working.

## Additional Reading
https://help.github.com/en/articles/securing-your-account-with-two-factor-authentication-2fa
