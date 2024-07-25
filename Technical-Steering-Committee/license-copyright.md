# Considerations for Coding Contributions to Zowe

When contributing source code to Zowe, there are two primary requirements that relate to license and copyright notices.

First, all repositories need to contain a license file.  Zowe uses the [Eclipse Public License 2.0 (EPL-2.0)](https://www.eclipse.org/legal/epl-v20.html) for code shipped with the Zowe releases, and dual licenses any example code or code that is intended to be leveraged in third party products under both the [Eclipse Public License 2.0 (EPL-2.0)](https://www.eclipse.org/legal/epl-v20.html) and [Apache License, Version 2.0 (Apache-2.0)](http://www.apache.org/licenses/LICENSE-2.0).  Include the plain-text version of the license ( either the [EPL-2.0](https://www.eclipse.org/org/documents/epl-2.0/EPL-2.0.txt) or both the [EPL-2.0](https://www.eclipse.org/org/documents/epl-2.0/EPL-2.0.txt) and [Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0.txt) license as appropriate), as a LICENSE file in the top-level directory of any Zowe repostiory.

Second, all source files need to include a header to clearly show the license.  Zowe has standardized on including [SPDX short-form license identifiers](https://spdx.org/ids) and a general copyright statement as shown below:

Example of an EPL-2.0 only licensed source file:

````
/**
  This program and the accompanying materials are made available under the terms of the
  Eclipse Public License v2.0 which accompanies this distribution, and is available at
  https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
**/
````

Example of a dual licensed source file under either the EPL-2.0 or Apache-2.0:

````
/**
  This program and the accompanying materials are made available and may be used, at your option, under either:
    * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
    * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0

  SPDX-License-Identifier: EPL-2.0 OR Apache-2.0

  Copyright Contributors to the Zowe Project.
**/
````

For property or configuration files that do not support comments, the license may be omitted.  If comments are supported the license header should be included.

Contributors may choose to include a copyright statement specifying themselves and/or their employer (as applicable) as the copyright holder of their contributions, but the Zowe project does not require or recommend this.

Finally, please note that pre-existing third-party license notices and copyright notices *should not be modified or removed* by anyone other than the copyright holder. Please contact the project if you are seeking to contribute code from a third party that is under a license different from EPL-2.0.
