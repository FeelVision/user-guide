---
layout: page
title: App Installation
subtitle: Install and configure the FeelVision Android app
previous: /hardware-setup/
previous_title: Hardware Setup
next: /modes/
next_title: Modes
toc: true
---

# App Installation Guide

This guide covers installing and configuring the FeelVision Android application on your device.

## System Requirements

### Minimum Requirements

- **Android Version**: 7.0 (API 24) or higher
- **RAM**: 4GB minimum, 6GB recommended
- **Storage**: 6GB free space (3 GB for models, 500MB for app)
- **Camera**: Required rear-facing camera or Luckfox pico mini
- **USB**: USB OTG support (for hardware connection)


### Compatibility Notes

- Android 6.0 and below: Not supported

## Installation Methods

### Method 1: Google Play Store (Recommended)
#### In the future (app is not yet available on Play Store)
#### Steps

1. **Open Play Store**
   - Tap the Play Store icon on your home screen
   - Sign in to your Google account if prompted

2. **Search for FeelVision**
   - Tap the search bar
   - Type "FeelVision"
   - Select the official app

3. **Install the App**
   - Tap "Install"
   - Review permissions
   - Wait for installation to complete

4. **Open the App**
   - Tap "Open" or find the app icon
   - Grant initial permissions when prompted

#### Permissions Required

- **Camera**: Essential for capturing images
- **Storage**: For saving face data and models
- **USB Device**: For connecting Luckfox hardware
- **Microphone**: For future voice features (optional)
- **Internet**: For initial model download only

### Method 2: Building from Source

#### Prerequisites

- Android Studio (latest version)
- JDK 11 or higher
- Android SDK (API 36)
- Git

#### Cloning the Repository

```bash
git clone https://github.com/feelvision/feelvision-android.git
cd feelvision/Feelvision-Android
```

#### Opening in Android Studio

1. Open Android Studio
2. Select "Open an existing project"
3. Navigate to the Feelvision-Android folder
4. Wait for Gradle sync to complete

#### Building the App

1. Select your device or emulator
2. Click the "Run" button (green triangle)
3. Or use the command line:
   ```bash
   ./gradlew assembleDebug
   ```

#### Installing the Debug Build

```bash
adb install app/build/outputs/apk/debug/app-debug.apk
```

## Initial Setup

### First Launch

When you first launch the app, you'll see:

1. **Welcome Screen**
   - Brief introduction to FeelVision
   - "Get Started" button

2. **Permission Request**
   - Camera permission
   - Storage permission
   - USB device permission

3. **Model Download**
   - Automatic download of AI models
   - Progress indicator
   - Requires internet connection

### Granting Permissions

#### Camera Permission

1. When prompted, tap "Allow"
2. If denied, go to Settings → Apps → FeelVision → Permissions
3. Enable Camera permission

#### Storage Permission

1. When prompted, tap "Allow"
2. For Android 11+: Request "Manage all files" access
3. Follow the on-screen instructions

#### USB Device Permission

1. When connecting Luckfox device, tap "OK"
2. If prompted, select "Use by default for this USB device"
3. This allows automatic connection

### Downloading AI Models

The app requires several AI models:

| Model | Size | Purpose |
|-------|------|---------|
| Gemma 4B | ~500MB | General AI inference |
| Blaze Face | ~25MB | Face detection |
| MobileFaceNet | ~20MB | Face recognition |

#### Download Process

1. Connect to Wi-Fi (recommended)
2. The app will automatically start download
3. Wait for all models to complete
4. Models are cached for offline use

#### Troubleshooting Downloads

| Issue | Solution |
|-------|----------|
| Download stuck | Check internet connection |
| Insufficient space | Free up storage space |
| Download failed | Retry or use different network |

## App Configuration

### Language Settings

1. Open the app
2. Tap the settings icon (gear)
3. Select "Language"
4. Choose your preferred language:
   - English
   - Hindi (हिंदी)
   - Telugu (తెలుగు)
   - Tamil (தமிழ்)
   - Kannada (ಕನ್ನड)
   - Malayalam (മലയാളം)

### Speech Settings

#### Speech Rate

1. Go to Settings → Speech
2. Adjust the slider:
   - 0.5x: Very slow
   - 0.75x: Slow
   - 1.0x: Normal (default)
   - 1.25x: Fast
   - 1.5x: Very fast

#### Voice Selection

1. Go to Settings → Speech → Voice
2. Select from available TTS voices
3. Preview each voice by tapping "Test"

### Display Settings

#### Theme

1. Go to Settings → Display
2. Choose theme:
   - Light
   - Dark
   - System default

#### Font Size

1. Go to Settings → Display → Font Size
2. Adjust slider for readability

### Debug Settings

#### Enabling Debug Mode

1. Go to Settings → Debug
2. Toggle "Debug Mode" on
3. This shows:
   - Camera preview
   - Inference logs
   - Performance metrics

#### Debug Log Export

1. In debug mode, tap the log icon
2. Select "Export logs"
3. Choose save location
4. Share with support if needed

## Connecting Hardware

### Automatic Connection

The app automatically detects the Luckfox device:

1. Connect the device via USB
2. Wait 2-3 seconds
3. You'll hear a confirmation sound
4. Status shows "Connected"

### Manual Connection

If auto-detection fails:

1. Go to Settings → Hardware
2. Tap "Connect Device"
3. Select the device from the list
4. Tap "Connect"

### Connection Status

| Status | Meaning |
|--------|---------|
| Disconnected | No device connected |
| Connecting | Attempting to connect |
| Connected | Device ready for use |
| Error | Connection failed |

## Updating the App

### Automatic Updates

If installed from Play Store:

1. Open Play Store
2. Go to "My apps & games"
3. Find FeelVision
4. Tap "Update"

### Manual Updates

For APK or source builds:

1. Download the latest APK
2. Install over existing version
3. Data and settings are preserved

### Update from Source

```bash
git pull origin main
./gradlew assembleDebug
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

## Uninstalling the App

### Standard Uninstall

1. Go to Settings → Apps → FeelVision
2. Tap "Uninstall"
3. Confirm uninstallation

### Data Removal

To remove all app data:

1. Go to Settings → Apps → FeelVision
2. Tap "Storage"
3. Tap "Clear data"
4. This removes:
   - Face database
   - Settings
   - Downloaded models

## Troubleshooting

### App Won't Install

| Problem | Solution |
|---------|----------|
| "Parse error" | APK is corrupted, re-download |
| "Insufficient storage" | Free up space on device |
| "App not installed" | Check Android version compatibility |

### App Crashes on Launch

1. Clear app cache
2. Clear app data
3. Reinstall the app
4. Check device compatibility

### Models Won't Download

1. Check internet connection
2. Ensure sufficient storage
3. Try different network (Wi-Fi vs mobile)
4. Clear cache and retry

### Hardware Not Detected

1. Check USB cable connection
2. Try different USB port
3. Grant USB permissions
4. Restart the app

## Advanced Configuration

### ADB Debugging

For developers and advanced users:

1. Enable USB debugging on your device
2. Connect via ADB
3. View logs:
   ```bash
   adb logcat | grep FeelVision
   ```

### Custom Model Location

To use models from external storage:

1. Copy models to `/sdcard/Download/`
2. App will automatically detect them
3. Useful for devices with limited internal storage

### Performance Tuning

For better performance on older devices:

1. Disable debug mode
2. Reduce image resolution in settings
3. Close background apps
4. Use performance mode in settings

## Security and Privacy

### Data Privacy

- Face data stored locally only
- No cloud sync by default
- No personal data collected
- Optional crash reporting

### Permissions Review

Review and manage permissions:

1. Go to Settings → Apps → FeelVision
2. Tap "Permissions"
3. Enable/disable as needed

### Data Backup

To backup your data:

1. Go to Settings → Backup
2. Tap "Export data"
3. Save to external storage
4. Restore on new device if needed

---

**Next:** [Modes Guide](/modes/)
