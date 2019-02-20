# Meeting Minutes for Doc Squad

## Attendees

- [x] Andrew (Broadcom)
- [x] Brandon (Broadcom)
- [x] Jim (Broadcom)
- [x] Ashley (IBM)
- [x] Alyson (Rocket)
- [x] Jason (Rocket)
- [x] Julie (Rocket)
- [ ] Sign our name here


## Agenda 

Move Zowe.org over to GitHub and merge the docs into this. Goals: 
- Enable prople to commit changes to Zowe.org through GitHub
- Reduce overlapping content on both sites

### **As is**
- How is the community website being managed now?   - John/Jack
  - Through WordPress
  - Limited access to edit source files? 
  - Maintained by Jack now - 
  
- How is the Zowe docs site being managed now?  - Doc squad/Jack
  - All source files in Markdown format on GitHub: https://github.com/zowe/docs-site
  - Published on https://zowe.github.io/docs-site/. Supports Edit in GitHub. Everyone can contribute and propose changes. 
  - Markdown files are generated into doc site using VuePress.

GitHub pages, use Jekyll engine

VuePress, not native supported by GitHub pages. Built in plug-ins. 

### **To be**

- Zowe community site  -John
  - New design: https://github.com/zowe/zowe.github.io/pull/1


### **Solutions, efforts**
- GitHub Page? 

   Example: https://egeria.odpi.org/

- Use the same VuePress engine to build community website? 

Concerns: 
- Different publish schedule for the two sites. 
- Migrating doc site to use Jekyll will take about two weeks. Most current doc site automation work must be redone, including PDF, D
- Migrating zowe.org to GitHub pages takes about 2- 3 days. 
- 


### **Content that can be merged**

- What is Zowe
- Contribute - code guidelines
- Contribute - UI guidelines
...

### **Next steps**
- Jack to look into the PR to migrate Zowe.org to GitHub page and set up a skeleton site for doc squad ad onboarding squad to collect feedback
- The doc squad to work with onboarding squad to determine two things: 
   - Whether to merge the two sites, is it necessary
   - What content on the two sites should be merged.
- If we're going to merge the sites, most work will happen on backend. Will need Jack's technical advice to determine the best solution to adopt.







