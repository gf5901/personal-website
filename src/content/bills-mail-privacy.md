## What bills-mail is

bills-mail is a personal tool Gregory Fong built to track his own household bills. It is not a product or service and is not offered to anyone else. Its only user is Gregory Fong, and it accesses only his own dedicated billing mailbox.

## What data it accesses

With Gregory's explicit consent, bills-mail uses Google's read-only Gmail permission (gmail.readonly) to search and read messages in his billing mailbox: senders, subjects, dates and message text such as amounts due, due dates and payment confirmations. It cannot send, delete, label or change any email.

## How the data is used

The tool uses message contents only to determine which of Gregory's bills are paid, scheduled or due, and to update his private bill-tracking notes. Data is not used for advertising, profiling, machine-learning model training or any purpose other than this personal bookkeeping.

## Storage and security

The access token is stored in the macOS Keychain on Gregory's own computer, never in source code or plain-text files. The tool keeps a local audit log of which searches and messages it accessed, without message contents. No email content is stored on any server operated for this tool.

## Sharing

Data obtained through Google APIs is not sold, rented or shared with third parties, and is not transferred except as needed for the personal purpose described above. bills-mail's use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## Revoking access

Access can be revoked at any time from the Google Account page under Security, Third-party connections, or by running the tool's logout command, which revokes the token with Google and deletes it locally.

## Contact

Questions about this policy: [dev.gregory.fong@outlook.com](mailto:dev.gregory.fong@outlook.com)

Last updated: November 7, 2026
