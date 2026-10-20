# Mergeflow releases

Installers for [Mergeflow](https://arouriengineer.dev), a desktop dashboard for GitLab merge requests.

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

On Windows, the installed app updates itself from this page. The zip version doesn't update itself: download the new zip and replace the folder. On macOS, automatic updates need a signed app, so download the new `.dmg` from the Releases page and repeat the `xattr` command.
