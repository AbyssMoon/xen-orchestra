> This file contains all changes that have not been released yet.
>
> Keep in mind the changelog is addressed to **users** and should be
> understandable by them.

### Security

> Security fixes and new features should go in this section

### Enhancements

> Users must be able to say: "Nice enhancement, I'm eager to test it"

- [Backups] Health check eligibility, full/incremental scheduling, and mirror job VM selection can now be driven by complex-matcher expressions (PR [#10064](https://github.com/vatesfr/xen-orchestra/pull/10064))

### Bug fixes

> Users must be able to say: "I had this issue, happy to know it's fixed"

- Fix `cannot read properties of undefined (reading code)` (PR [#10668](https://github.com/vatesfr/xen-orchestra/pull/10668))

### Packages to release

> When modifying a package, add it here with its release type.
>
> The format is the following: `- $packageName $releaseType`
>
> Where `$releaseType` is
>
> - patch: if the change is a bug fix or a simple code improvement
> - minor: if the change is a new feature
> - major: if the change breaks compatibility
>
> Keep this list alphabetically ordered to avoid merge conflicts

<!--packages-start-->

<<<<<<< HEAD
- xo-server patch
=======
- @vates/iscsi minor
- @vates/nbd-client minor
- @vates/types minor
- @xen-orchestra/acl minor
- @xen-orchestra/async-map patch
- @xen-orchestra/backup-archive minor
- @xen-orchestra/backups minor
- @xen-orchestra/disk-transform patch
- @xen-orchestra/fs minor
- @xen-orchestra/proxy patch
- @xen-orchestra/qa-test minor
- @xen-orchestra/qcow2 patch
- @xen-orchestra/rest-api minor
- @xen-orchestra/upload-ova patch
- @xen-orchestra/vmdk major
- @xen-orchestra/vmware-explorer minor
- @xen-orchestra/web minor
- @xen-orchestra/web-core minor
- @xen-orchestra/xapi minor
- vhd-lib minor
- xen-api minor
- xo-acl-resolver minor
- xo-cli patch
- xo-common minor
- xo-server minor
- xo-server-ipmi-sensors minor
- xo-server-load-balancer minor
- xo-server-netbox minor
- xo-server-sdn-controller patch
- xo-server-transport-icinga2 patch
- xo-web minor
>>>>>>> befcc0cca8 (fix rebase)

<!--packages-end-->
