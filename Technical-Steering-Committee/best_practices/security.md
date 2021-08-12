# Security

The following list is based on the [Core Infrastructure Initiative](https://bestpractices.coreinfrastructure.org/en/criteria/0)

## Secure development knowledge

* The project MUST have at least one primary developer who knows how to design secure software. (See ‘details’ for the exact requirements.) [know_secure_design](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.know_secure_design)
* At least one of the project's primary developers MUST know of common kinds of errors that lead to vulnerabilities in this kind of software, as well as at least one method to counter or mitigate each of them. [know_common_errors](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.know_common_errors) 

## Use basic good cryptographic practices

* The software produced by the project MUST use, by default, only cryptographic protocols and algorithms that are publicly published and reviewed by experts (if cryptographic protocols and algorithms are used). {N/A allowed} [crypto_published](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.crypto_published)
* If the software produced by the project is an application or library, and its primary purpose is not to implement cryptography, then it SHOULD only call on software specifically designed to implement cryptographic functions; it SHOULD NOT re-implement its own. {N/A allowed} [crypto_call](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.crypto_call)
* All functionality in the software produced by the project that depends on cryptography MUST be implementable using FLOSS. {N/A allowed} [crypto_floss](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.crypto_floss)
* The security mechanisms within the software produced by the project MUST use default keylengths that at least meet the NIST minimum requirements through the year 2030 (as stated in 2012). It MUST be possible to configure the software so that smaller keylengths are completely disabled. {N/A allowed} [crypto_keylength](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.crypto_keylength)
* The default security mechanisms within the software produced by the project MUST NOT depend on broken cryptographic algorithms (e.g., MD4, MD5, single DES, RC4, Dual_EC_DRBG), or use cipher modes that are inappropriate to the context, unless they are necessary to implement an interoperable protocol (where the protocol implemented is the most recent version of that standard broadly supported by the network ecosystem, that ecosystem requires the use of such an algorithm or mode, and that ecosystem does not offer any more secure alternative). The documentation MUST describe any relevant security risks and any known mitigations if these broken algorithms or modes are necessary for an interoperable protocol. {N/A allowed} [crypto_working](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.crypto_working)
* The default security mechanisms within the software produced by the project SHOULD NOT depend on cryptographic algorithms or modes with known serious weaknesses (e.g., the SHA-1 cryptographic hash algorithm or the CBC mode in SSH). {N/A allowed} [crypto_weaknesses](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.crypto_weaknesses)
* The security mechanisms within the software produced by the project SHOULD implement perfect forward secrecy for key agreement protocols so a session key derived from a set of long-term keys cannot be compromised if one of the long-term keys is compromised in the future. {N/A allowed} [crypto_pfs](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.crypto_pfs)
* If the software produced by the project causes the storing of passwords for authentication of external users, the passwords MUST be stored as iterated hashes with a per-user salt by using a key stretching (iterated) algorithm (e.g., Argon2id, Bcrypt, Scrypt, or PBKDF2). See also [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html). {N/A allowed} [crypto_password_storage](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.crypto_password_storage)
* The security mechanisms within the software produced by the project MUST generate all cryptographic keys and nonces using a cryptographically secure random number generator, and MUST NOT do so using generators that are cryptographically insecure. {N/A allowed} [crypto_random](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.crypto_random) 

## Secured delivery against man-in-the-middle (MITM) attacks

* The project MUST use a delivery mechanism that counters MITM attacks. Using https or ssh+scp is acceptable. [delivery_mitm](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.delivery_mitm)
* A cryptographic hash (e.g., a sha1sum) MUST NOT be retrieved over http and used without checking for a cryptographic signature. [delivery_unsigned](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.delivery_unsigned)

## Publicly known vulnerabilities fixed

* There MUST be no unpatched vulnerabilities of medium or higher severity that have been publicly known for more than 60 days. [vulnerabilities_fixed_60_days](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.vulnerabilities_fixed_60_days)
* Projects SHOULD fix all critical vulnerabilities rapidly after they are reported. [vulnerabilities_critical_fixed](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.vulnerabilities_critical_fixed) 

## Other security issues

* The public repositories MUST NOT leak a valid private credential (e.g., a working password or private key) that is intended to limit public access. [no_leaked_credentials](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.no_leaked_credentials) 