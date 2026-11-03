# Mergeflow releases

Installers for [Mergeflow](https://iruora.github.io/mergeflow-releases/), a desktop dashboard for GitLab merge requests. Read the [documentation](https://iruora.github.io/mergeflow-releases/docs.html) to get started.

Download the latest version from the [Releases](https://github.com/Iruora/mergeflow-releases/releases/latest) page:

- **macOS**: the `.dmg` (Apple Silicon: `arm64`, Intel: `x64`)
- **Windows**: the `Setup` `.exe` installer, or the `-win.zip` to run `Mergeflow.exe` without installing (unzip it anywhere and open `Mergeflow.exe`)

## The app isn't signed yet

Mergeflow isn't signed with an Apple or Microsoft certificate yet, so the first launch needs one extra step.

**macOS**: macOS says Mergeflow "is damaged" or "can't be opened". Drag Mergeflow into Applications, then run this in Terminal:

```sh
xattr -cr /Applications/Mergeflow.app
```

This removes the quarantine flag macOS adds to downloaded files. Run it again after installing each new version.

Alternatively, try to open the app once, then go to **System Settings > Privacy & Security** and click **Open Anyway**.

**Windows**: if SmartScreen says "Windows protected your PC", click **More info**, then **Run anyway**.

## Updates

Installed copies update themselves from this page, on macOS and with the Windows installer: they check at launch and every 4 hours, download the new version in the background, and offer "Restart to update". On macOS, the `xattr` command is only needed for the first install. The portable Windows zip doesn't update itself: download the new zip and replace the folder.

## Website

The product website and documentation live in [`site/`](site/) and are published to GitHub Pages by the [Pages workflow](.github/workflows/pages.yml) whenever `site/` changes or a release is published. The workflow points the download links at the latest stable release, so they never need editing by hand.
