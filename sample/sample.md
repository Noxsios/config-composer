
### VLAN Setup

Short explanation / notes

```js
name BACKUP_LOCAL_MGMT
exit
!
interface vlan 5
description DATA
ip address {{FIRSTIP}}
exit
interface vlan 6
description VOICE
ip address {{SECONDIP}}
!
```
