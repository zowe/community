# Security

The following list is based on the [Core Infrastructure Initiative](https://bestpractices.coreinfrastructure.org/en/criteria/0)

## Secure development knowledge

* The squad has at least one developer involved in the Security workgroup.  

## Use basic good cryptographic practices

* The software produced by the squad MUST use, by default, only cryptographic protocols and algorithms that are publicly published and reviewed by experts (if cryptographic protocols and algorithms are used).
* If the software produced by the squad is an application or library, and its primary purpose is not to implement cryptography, then it SHOULD only call on software specifically designed to implement cryptographic functions; it SHOULD NOT re-implement its own.
* All functionality in the software produced by the squad that depends on cryptography MUST be implementable using FLOSS. 
* The security mechanisms within the software produced by the squad MUST use default keylengths that at least meet the NIST minimum requirements through the year 2030 (as stated in 2012). It MUST be possible to configure the software so that smaller keylengths are completely disabled.
* The default security mechanisms within the software produced by the squad MUST NOT depend on broken cryptographic algorithms (e.g., MD4, MD5, single DES, RC4, Dual_EC_DRBG), or use cipher modes that are inappropriate to the context, unless they are necessary to implement an interoperable protocol (where the protocol implemented is the most recent version of that standard broadly supported by the network ecosystem, that ecosystem requires the use of such an algorithm or mode, and that ecosystem does not offer any more secure alternative). The documentation MUST describe any relevant security risks and any known mitigations if these broken algorithms or modes are necessary for an interoperable protocol.
* The default security mechanisms within the software produced by the squad SHOULD NOT depend on cryptographic algorithms or modes with known serious weaknesses (e.g., the SHA-1 cryptographic hash algorithm or the CBC mode in SSH).
* The security mechanisms within the software produced by the squad SHOULD implement perfect forward secrecy for key agreement protocols so a session key derived from a set of long-term keys cannot be compromised if one of the long-term keys is compromised in the future.
* If the software produced by the squad causes the storing of passwords for authentication of external users, the passwords MUST be stored as iterated hashes with a per-user salt by using a key stretching (iterated) algorithm (e.g., Argon2id, Bcrypt, Scrypt, or PBKDF2). See also [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html). 
* The security mechanisms within the software produced by the squad MUST generate all cryptographic keys and nonces using a cryptographically secure random number generator, and MUST NOT do so using generators that are cryptographically insecure. 

## Secured delivery against man-in-the-middle (MITM) attacks

* The squad MUST use a common Zowe delivery mechanism.

## Publicly known vulnerabilities fixed

* There MUST be no unpatched vulnerabilities of medium or higher severity that have been publicly known for more than 60 days. 
* Squad SHOULD fix all critical vulnerabilities rapidly after they are reported. 

## Other security issues

* The public repositories MUST NOT leak a valid private credential (e.g., a working password or private key) that is intended to limit public access.