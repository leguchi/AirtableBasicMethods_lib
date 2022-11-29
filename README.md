# Airtable Basic Methods

## Prerequisites
You will need:
- Basic understanding of what Autocode is, and how it works. [Click here](https://autocode.com/guides/how-to-build-a-discord-bot/) to get verified when joining the Autocode Developers Discord server, and/or if you'd rather not touch or smell Discord, check out the docs [here](https://docs.autocode.com/introduction-to-autocode/what-is-autocode/).
- If you completed the guide, then you will have an Autocode account (individual or organization).
- The Autocode account must be with available requests. The bronze tier's max is 1,000/mo. If need more, check [the pricing page](https://autocode.com/pricing/).

**You MUST read this README.** 
If you read this fully, you will randomly find secret words that is worth $1 
once you ping me in the Autocode Discord server. It will look something like this: 
`rainbow ramen polkadots`
Send those words to me in one message with the App it's from.

## How to use
Please fully install this app. When you hit the green "install free" button, it will ask for which project you'd like to have it added to. `tropical` You can either select an existing one, or create a new one, and it can also be between the individual account or any of the shared organization accounts you have access to.

**You have completed 1/3 installation steps**

If you hit the next button, it will ask you to link an Airtable account, and will only add one of your account's bases (which you can choose, right there!). `hover` *However*, that means you will have to have an existing project base! If you'd like to start off with the same table I had when testing this app, you can import [this file](https://autocode.com/leguchi/apps/airtable-use/src/resources/) into an Airtable base. Once you have added an Airtable base that you have access and permission to for the required linked resource, then:

**You have completed 2/3 installation steps**

Last step, it will ask you for values of environment variables. *As of now, all of them are required*. You will be able to change the values of them on the bottom left of your Autocode project marked "Environment Variables", and you will be able to update them whenever you'd need. `toss`

Just some brief explanation on what each of those variables are, and they're for. 
- `RESULT_FIELD` is the field you are trying to get the result for, so Ex. If you use the `distinct()` method (which I unfortunately have not included, yet), you will be looking for that specific field.
- `TABLE_NAME` is the name of the table you would like to be searching through.
- `WHERE_FIELD` is the field you'd like to have the `where` parameter of the Airtable methods to use. As of now, I have it limited to only taking one field.
- `WHERE_VALUE` is the value you'd like to have the `where` parameter of the Airtable methods to use. As of now, I have it limited to only taking one value.

**You have completed 3/3 installation steps**

After installing the app, you may definitely make changes to the table manually. I will *eventually* add the other API methods. The logs you will receive (from what I have written by default) is made no matter what your where parameter is, therefore it may not make sense verbally (as of now). You will have to be careful with the types of the field/values in some cases, since there includes access to booleans, attachments, buttons(?!).

Please enjoy the basic introduction to the Airtable API on Autocode! Oh, and please do not ping me in Discord if I am not online. If you need help, please ask the community, first, in the [Autocode Developers](https://discord.gg/q3spSW2f) server's correct support channel after you have been verified. If you find me available online, then you may ping me with questions about this app, or with the answer to the $1 worth correct word combination that you will owe me (if you ping me with that answer, you didn't read this to the end). **ENJOY!**


### Updates
1.1.0 on Oct 12, 2022: Added `delete()` function.
<br>
1.1.1 on Oct 13, 2022: Made the README more clear.