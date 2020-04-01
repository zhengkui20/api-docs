---
title: API Tokens Permissions
weight: 10
---

Below is a list of all the Token Permissions that are available to use. The current list can be [fetched via the API](https://api.cloudflare.com/#permission-groups-list-permission-groups) at any time.

```json
[
    {
      "id": "0cc3a61731504c89b99ec1be78b77aa0",
      "name": "API Tokens Read",
      "description": "Grants read access to user's API Tokens",
      "scopes": [
        "com.cloudflare.api.user"
      ]
    },
    {
      "id": "686d18d5ac6c441c867cbf6771e58a0a",
      "name": "API Tokens Write",
      "description": "Grants write access to user's API Tokens",
      "scopes": [
        "com.cloudflare.api.user"
      ]
    },
    {
      "id": "7ea222f6d5064cfa89ea366d7c1fee89",
      "name": "Access: Apps and Policies Read",
      "description": "Grants read access to Cloudflare Access zone resources",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "1e13c5124ca64b72b1969a67e8829049",
      "name": "Access: Apps and Policies Write",
      "description": "Grants write access to Cloudflare Access zone resources",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "26bc23f853634eb4bff59983b9064fde",
      "name": "Access: Organizations, Identity Providers, and Groups Read",
      "description": "Grants read access to Cloudflare Access account resources",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "bfe0d8686a584fa680f4c53b5eb0de6d",
      "name": "Access: Organizations, Identity Providers, and Groups Write",
      "description": "Grants write access to Cloudflare Access account resources",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "de7a688cc47d43bd9ea700b467a09c96",
      "name": "Account Firewall Access Rules Read",
      "description": "Grants read access to account firewall access rules",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "a416acf9ef5a4af19fb11ed3b96b1fe6",
      "name": "Account Firewall Access Rules Write",
      "description": "Grants write access to account firewall access rules",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "c1fde68c7bcc44588cbb6ddbc16d6480",
      "name": "Account Settings Read",
      "description": "Grants read access to Account resources, account membership, and account level features",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "1af1fa2adc104452b74a9a3364202f20",
      "name": "Account Settings Write",
      "description": "Grants write access to Account resources, account membership, and account level features",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "9c88f9c5bce24ce7af9a958ba9c504db",
      "name": "Analytics Read",
      "description": "Grants read access to analytics",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "094547ab6e77498c8c4dfa87fadd5c51",
      "name": "Apps Write",
      "description": "Grants full access to Cloudflare Apps",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "7cf72faf220841aabcfdfab81c43c4f6",
      "name": "Billing Read",
      "description": "Grants read access to billing profile, subscriptions, and access to fetch invoices and entitlements",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "6c80e02421494afc9ae14414ed442632",
      "name": "Billing Write",
      "description": "Grants write access to billing profile, subscriptions, and access to fetch invoices and entitlements",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "e17beae8b8cb423a99b1730f21238bed",
      "name": "Cache Purge",
      "description": "Grants access to purge cache",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "5f48a472240a4b489a21d43bd19a06e1",
      "name": "DNS Firewall Read",
      "description": "Grants read access to DNS Firewall",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "da6d2d6f2ec8442eaadda60d13f42bca",
      "name": "DNS Firewall Write",
      "description": "Grants write access to DNS Firewall",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "82e64a83756745bbbb1c9c2701bf816b",
      "name": "DNS Read",
      "description": "Grants read access to DNS",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "4755a26eedb94da69e1066d98aa820be",
      "name": "DNS Write",
      "description": "Grants write access to DNS",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "4ec32dfcb35641c5bb32d5ef1ab963b4",
      "name": "Firewall Services Read",
      "description": "Grants read access to Firewall resources",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "43137f8d07884d3198dc0ee77ca6e79b",
      "name": "Firewall Services Write",
      "description": "Grants write access to Firewall resources",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "e763fae6ee95443b8f56f19213c5f2a5",
      "name": "IP Prefixes: BGP On Demand Read",
      "description": "Grants access to read ip prefix bgp configuration",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "2ae23e4939d54074b7d252d27ce75a77",
      "name": "IP Prefixes: BGP On Demand Write",
      "description": "Grants access to read and change ip prefix bgp configuration",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "e9a975f628014f1d85b723993116f7d5",
      "name": "Load Balancers Read",
      "description": "Grants read access to load balancers and associated resources",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "6d7f2f5f5b1d4a0e9081fdc98d432fd1",
      "name": "Load Balancers Write",
      "description": "Grants write access to load balancers and associated resources",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "9d24387c6e8544e2bc4024a03991339f",
      "name": "Load Balancing: Monitors and Pools Read",
      "description": "Grants read access to account level load balancer resources",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "d2a1802cc9a34e30852f8b33869b2f3c",
      "name": "Load Balancing: Monitors and Pools Write",
      "description": "Grants write access to account level load balancer resources",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "c4a30cd58c5d42619c86a3c36c441e2d",
      "name": "Logs Read",
      "description": "Grants read access to logs and logpush jobs",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "3e0b5820118e47f3922f7c989e673882",
      "name": "Logs Write",
      "description": "Grants write access to logpush jobs",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "3518d0f75557482e952c6762d3e64903",
      "name": "Memberships Read",
      "description": "Grants read access to a user's account memberships,",
      "scopes": [
        "com.cloudflare.api.user"
      ]
    },
    {
      "id": "9201bc6f42d440968aaab0c6f17ebb1d",
      "name": "Memberships Write",
      "description": "Grants write access to a user's account memberships",
      "scopes": [
        "com.cloudflare.api.user"
      ]
    },
    {
      "id": "b415b70a4fd1412886f164451f20405c",
      "name": "Page Rules Read",
      "description": "Grants read access to Page Rules",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "ed07f6c337da4195b4e72a1fb2c6bcae",
      "name": "Page Rules Write",
      "description": "Grants write access to Page Rules",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "7b7216b327b04b8fbc8f524e1f9b7531",
      "name": "SSL and Certificates Read",
      "description": "Grants read access to SSL configuration and cert management",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "c03055bc037c4ea9afb9a9f104b7b721",
      "name": "SSL and Certificates Write",
      "description": "Grants write access to SSL configuration and cert management",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "de21485a24744b76a004aa153898f7fe",
      "name": "Stream Read",
      "description": "Grants read access to Cloudflare Stream",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "714f9c13a5684c2885a793f5edb36f59",
      "name": "Stream Write",
      "description": "Grants write access to Cloudflare Stream",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "3f376c8e6f764a938b848bd01c8995c4",
      "name": "Teams Read",
      "description": "Grants read access to teams",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "efb81b5cd37d49f3be1da9363a6d7a19",
      "name": "Teams Report",
      "description": "Grants reporting access to teams",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "b33f02c6f7284e05a6f20741c0bb0567",
      "name": "Teams Write",
      "description": "Grants write access to teams",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "8acbe5bb0d54464ab867149d7f7cf8ac",
      "name": "User Details Read",
      "description": "Grants read access to user details",
      "scopes": [
        "com.cloudflare.api.user"
      ]
    },
    {
      "id": "55a5e17cc99e4a3fa1f3432d262f2e55",
      "name": "User Details Write",
      "description": "Grants write access to user details",
      "scopes": [
        "com.cloudflare.api.user"
      ]
    },
    {
      "id": "8b47d2786a534c08a1f94ee8f9f599ef",
      "name": "Workers KV Storage Read",
      "description": "Grants read access to Cloudflare Workers KV Storage",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "f7f0eda5697f475c90846e879bab8666",
      "name": "Workers KV Storage Write",
      "description": "Grants write access to Cloudflare Workers KV Storage",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "2072033d694d415a936eaeb94e6405b8",
      "name": "Workers Routes Read",
      "description": "Grants read access to Cloudflare Workers and Workers KV Storage",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "28f4b596e7d643029c524985477ae49a",
      "name": "Workers Routes Write",
      "description": "Grants write access to Cloudflare Workers and Workers KV Storage",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "1a71c399035b4950a1bd1466bbe4f420",
      "name": "Workers Scripts Read",
      "description": "Grants read access to Cloudflare Workers scripts",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "e086da7e2179491d91ee5f35b3ca210a",
      "name": "Workers Scripts Write",
      "description": "Grants write access to Cloudflare Workers scripts",
      "scopes": [
        "com.cloudflare.api.account"
      ]
    },
    {
      "id": "c8fed203ed3043cba015a93ad1616f1f",
      "name": "Zone Read",
      "description": "Grants read access to zone management",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "517b21aee92c4d89936c976ba6e4be55",
      "name": "Zone Settings Read",
      "description": "Grants read access to zone settings",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "3030687196b94b638145a3953da2b699",
      "name": "Zone Settings Write",
      "description": "Grants write access to zone settings",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    },
    {
      "id": "e6d2666161e84845a636613608cee8d5",
      "name": "Zone Write",
      "description": "Grants write access to zone management",
      "scopes": [
        "com.cloudflare.api.account.zone"
      ]
    }
]
```
