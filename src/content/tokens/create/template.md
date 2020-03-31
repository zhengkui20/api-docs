---
title: Creating API Tokens with Templates
weight: 1
---

[template_select]: /tokens/create/media/template_select.png "Template Selection Screen"
[template_customize]: /tokens/create/media/template_customize.png "Template Customization Screen"
[zone_selection]: /tokens/create/media/zone_selection.png "Zone Selection For Template"
[token_summary]: /tokens/create/media/token_summary.png "Token Summary Screen"
[token_complete]: /tokens/create/media/token_complete.png "Token Completion Screen"

If you new to API Tokens or the Cloudflare API, Templates are the quickest way to get started. 

Once logged in on the [Cloudflare Dashboard](https://dash.cloudflare.com), go to User Profile -> API Tokens or [click here](https://dash.cloudflare.com/profile/api-tokens). From there select `Create Token`

First, elect the template most appropriate to your use case. Don't worry you can further customize the template after selecting it including which accounts and zones the token will be able to access.

![Template selection][template_select]

In this example, the `Edit Zone DNS` template is selected. After selecting, you are presented with a view of the currently selected permissions. For this token, the only required selection is which zones the token should belong to. 

![Template Customization][template_customize]

The options available are:

1. A specific zone - ex: example.com
2. All zones from a specific account - ex: All zones belonging to the account named `example production`
3. All zones in all accounts. This grants access to every zone you have access to. Exercise caution when granting permissions this widely.

Note: When option 2 or 3 are included, then excluding zones can be used to "allow all" except specific zones.

For this example, we go with option 1 and select the zone `theburritobot.com`.

![Zone Selection][zone_selection]

Once you have selected the appropriate permissions and resources, select `Continue to Summary` to review the token before creating. The token summary screen allows you to see all the resources and permissions the token will have before creating the token and receiving the token secret.

![Token Summary Screen][token_summary]

Once you have verified the token is as desired, select `Create Token` to generate the secret that is used to access the API with this token. The token secret is only shown once and if lost then the token can be rolled to refresh the secret. Doing so will invalidate the previous secret.

![Token Create Completion Screen][token_complete]

This screen also includes an example command to test the token also provided below. The endpoint allows you to fetch the information of the token.

```curl
 curl -X GET "https://api.cloudflare.com/client/v4/user/tokens/verify" \
     -H "Authorization: Bearer <token secret>" \
     -H "Content-Type:application/json"
```

The result:
```curl
{
  "result": {
    "id": "100bf38cc8393103870917dd535e0628",
    "status": "active"
  },
  "success": true,
  "errors": [],
  "messages": [
    {
      "code": 10000,
      "message": "This API Token is valid and active",
      "type": null
    }
  ]
}
```

