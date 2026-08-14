# DPDP privacy operations

This checklist supports the website implementation. It is an operational control document, not a substitute for advice from CHES's lawyer, accountant or privacy professional.

## Before production

- Apply migrations `001` through `006` to the production database. Migration `003` adds the notice version and consent timestamp to new donation records. Migration `004` retires the old persistent visitor identifier table. Migration `005` records the previous aggregate counter schema. Migration `006` creates the anonymous unique homepage visitor table.
- Confirm that `admin@cheschennai.com` is monitored by an authorised CHES privacy contact and can receive rights requests and breach questions.
- Maintain a current list of vendors that can access website or donor data, including hosting, database, payment and professional service providers. Record each vendor's purpose, access, security commitments and any transfer outside India.
- Keep administrator access limited to named personnel. Review access at least every six months and immediately when someone leaves or changes role.
- Set a documented retention period for donation, tax and accounting records with CHES's accountant. Delete or irreversibly anonymise records when the purpose and legal retention period end.

## Rights request procedure

1. Acknowledge the request received at `admin@cheschennai.com` and open an internal request record without copying unnecessary personal data into email subjects or logs.
2. Verify the requester proportionately using information already held. Do not request Aadhaar or a full identity document by ordinary email.
3. Identify the records, purposes, processors and legal or tax retention requirements relevant to the request.
4. Complete access, correction, update, erasure or withdrawal actions, or explain the lawful reason a record must be retained. Respond within the applicable timeline, with the DPDP Rules describing a maximum of ninety days for rights requests.
5. Record the decision, date, person responsible and any deletion or correction evidence in the restricted admin process.

## Breach response

- Preserve evidence and record when CHES became aware of the incident.
- Contain the incident, rotate credentials or restrict access where necessary, assess affected records and involve the relevant service provider.
- Notify affected Data Principals without delay when required, using plain language and explaining the likely impact, safety steps and a CHES contact.
- Notify the Data Protection Board of India without undue delay and provide the detailed information required within 72 hours, or seek a permitted extension in writing where applicable.
- Record the cause, remedial actions, notifications and recurrence-prevention work.

## Ongoing review

- Review the public [Privacy Notice](/privacy) and [Terms of Use](/terms) whenever the site adds analytics, a newsletter, contact form, payment processor, volunteer application, child-facing service, or new personal-data field.
- Do not add tracking, advertising, newsletter or third-party form tools without updating the notice, consent design, vendor register, retention plan and security review. The current homepage counter must remain limited to one random first-party HttpOnly visitor token per browser/device, with no IP storage, user-agent storage, local storage, advertising or profiling.
- Review the final DPDP Act, Rules, notifications and Board guidance when they change. The website provides a contact route for internal grievances; users may escalate through the official Data Protection Board information published by MeitY.
