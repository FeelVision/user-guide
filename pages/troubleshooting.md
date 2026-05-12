---
layout: page
title: Troubleshooting
subtitle: Solve common problems
previous: /pages/face-recognition.html
previous_title: Face Recognition
next: /pages/faq.html
next_title: FAQ
toc: true
---

# Troubleshooting Guide

This guide helps you diagnose and resolve common issues with FeelVision.

## Quick Diagnosis

### Issue Finder

Use this table to quickly identify your problem:

| Symptom | Likely Cause | Go To Section |
|---------|--------------|---------------|
| App won't install | Incompatible device | [Installation Issues](#installation-issues) |
| Device not connecting | USB/cable problem | [Connection Issues](#connection-issues) |
| No audio output | TTS/volume issue | [Audio Issues](#audio-issues) |
| Slow response | Performance problem | [Performance Issues](#performance-issues) |
| Face recognition failing | Enrollment issue | [Face Recognition Issues](#face-recognition-issues) |
| Battery draining quickly | Power management | [Battery Issues](#battery-issues) |
| Models won't download | Network/storage | [Model Download Issues](#model-download-issues) |

## Installation Issues

### App Won't Install from Play Store

**Problem**: Installation fails or shows error

**Solutions**:

1. **Check Android Version**
   - Go to Settings → About Phone
   - Ensure Android 7.0 (API 24) or higher
   - Update if needed

2. **Check Storage Space**
   - Go to Settings → Storage
   - Ensure at least 1GB free space
   - Clear unnecessary files if needed

3. **Clear Play Store Cache**
   - Go to Settings → Apps → Google Play Store
   - Tap "Storage"
   - Tap "Clear cache"
   - Retry installation

4. **Check Google Account**
   - Ensure you're signed in to Google Play
   - Try signing out and back in
   - Check for payment method issues (if applicable)

### APK Installation Fails

**Problem**: "Parse error" or "App not installed"

**Solutions**:

1. **Verify APK Integrity**
   - Re-download the APK
   - Check file size matches expected size
   - Don't rename the APK file

2. **Enable Unknown Sources**
   - Go to Settings → Security
   - Enable "Install unknown apps"
   - Allow your file manager

3. **Check Android Version**
   - Ensure compatibility with your Android version
   - Some APKs require specific Android versions

### Build from Source Fails

**Problem**: Gradle sync or build errors

**Solutions**:

1. **Check Android Studio Version**
   - Use latest stable version
   - Update Android Studio if needed

2. **Check JDK Version**
   - Ensure JDK 11 or higher is installed
   - Set JAVA_HOME correctly

3. **Update Gradle**
   - Open gradle-wrapper.properties
   - Update to latest Gradle version
   - Sync project

4. **Clear Gradle Cache**
   ```bash
   ./gradlew clean
   rm -rf ~/.gradle/caches/
   ./gradlew build
   ```

## Connection Issues

### Device Not Detected

**Problem**: Luckfox device not recognized by app

**Solutions**:

1. **Check USB Cable**
   - Try a different USB cable
   - Ensure cable is not damaged
   - Use the cable provided with the module

2. **Check USB Port**
   - Try different USB port on phone
   - Ensure port is not damaged
   - Remove any USB hubs or adapters

3. **Grant USB Permissions**
   - When prompted, tap "OK" for USB device
   - Go to Settings → Apps → FeelVision → Permissions
   - Ensure USB device permission is granted

4. **Restart App**
   - Close the app completely
   - Reopen the app
   - Reconnect the device

5. **Restart Phone**
   - Power off your phone
   - Wait 10 seconds
   - Power on and retry

### Intermittent Connection

**Problem**: Connection drops randomly

**Solutions**:

1. **Check Cable Quality**
   - Use high-quality USB cable
   - Avoid cheap or damaged cables
   - Ensure cable is securely connected

2. **Check Device Power**
   - Ensure phone is not in power-saving mode
   - Check phone battery level
   - Try connecting to power source

3. **Disable USB Optimization**
   - Go to Settings → Battery
   - Find FeelVision app
   - Disable battery optimization

4. **Check for Interference**
   - Remove other USB devices
   - Avoid using USB hubs
   - Connect directly to phone

### Connection Timeout

**Problem**: App shows "Connection timeout" error

**Solutions**:

1. **Check Network Settings**
   - Ensure USB network is configured correctly
   - Device IP: 172.32.0.1
   - Host IP: 172.32.0.100

2. **Restart Network Services**
   - Toggle airplane mode on/off
   - Restart phone
   - Reconnect device

3. **Check Firewall/Security Apps**
   - Disable VPN temporarily
   - Disable firewall apps
   - Check for security app interference

## Audio Issues

### No Audio Output

**Problem**: No sound from TTS

**Solutions**:

1. **Check Volume**
   - Increase phone volume
   - Check media volume (not ringtone)
   - Ensure phone is not muted

2. **Check TTS Settings**
   - Go to Settings → Accessibility → Text-to-Speech
   - Ensure a TTS engine is selected
   - Test TTS engine
   - Select Google TTS if available

3. **Check App Settings**
   - Open FeelVision settings
   - Go to Speech settings
   - Ensure speech is enabled
   - Test speech with "Test Speech" button

4. **Check Audio Focus**
   - Close other audio apps
   - Stop music/video playback
   - Ensure no other app is using audio

### Audio Too Fast/Slow

**Problem**: Speech rate is uncomfortable

**Solutions**:

1. **Adjust Speech Rate**
   - Go to FeelVision settings
   - Navigate to Speech → Speech Rate
   - Adjust slider to comfortable level
   - Test with "Test Speech" button

2. **Change TTS Engine**
   - Try different TTS engines
   - Some engines have better rate control
   - Google TTS is recommended

### Audio Quality Poor

**Problem**: Speech is unclear or robotic

**Solutions**:

1. **Change TTS Voice**
   - Go to Settings → Speech → Voice
   - Try different voices
   - Higher quality voices sound better

2. **Check TTS Engine**
   - Ensure using a high-quality TTS engine
   - Google TTS provides best quality
   - Download high-quality voices if available

## Performance Issues

### Slow Response Time

**Problem**: AI takes too long to respond

**Solutions**:

1. **Close Background Apps**
   - Close unnecessary apps
   - Clear recent apps
   - Free up RAM

2. **Check Device Performance**
   - Restart phone if slow
   - Check available RAM
   - Close resource-intensive apps

3. **Enable Performance Mode**
   - Go to FeelVision settings
   - Enable "Performance Mode"
   - This prioritizes app performance

4. **Reduce Image Resolution**
   - Go to settings
   - Lower capture resolution
   - Smaller images process faster

### App Crashes

**Problem**: App closes unexpectedly

**Solutions**:

1. **Clear App Cache**
   - Go to Settings → Apps → FeelVision
   - Tap "Storage"
   - Tap "Clear cache"

2. **Clear App Data**
   - Go to Settings → Apps → FeelVision
   - Tap "Storage"
   - Tap "Clear data"
   - **Warning**: This resets settings

3. **Reinstall App**
   - Uninstall the app
   - Reinstall from Play Store
   - Reconfigure settings

4. **Check for Updates**
   - Update to latest app version
   - Updates may fix crash bugs

5. **Report Crash**
   - Enable crash reporting in settings
   - Share crash logs with support

### High Memory Usage

**Problem**: App using too much memory

**Solutions**:

1. **Restart App Regularly**
   - Close and reopen app periodically
   - This clears accumulated memory

2. **Reduce Model Usage**
   - Don't keep all modes active
   - Switch modes less frequently
   - Close app when not in use

3. **Check for Memory Leaks**
   - Monitor memory usage in settings
   - Report if memory keeps increasing
   - This may indicate a bug

## Face Recognition Issues

### Faces Not Detected

**Problem**: App doesn't detect faces

**Solutions**:

1. **Check Lighting**
   - Ensure good lighting
   - Avoid harsh shadows
   - Use even, frontal lighting

2. **Check Camera Positioning**
   - Ensure camera is facing person
   - Check distance (1-2 meters optimal)
   - Verify camera is not obstructed

3. **Check Camera Quality**
   - Clean camera lens
   - Ensure camera is working
   - Test with phone camera app

### Recognition Not Working

**Problem**: Faces detected but not recognized

**Solutions**:

1. **Add More Photos**
   - Enroll more photos per person
   - Use different angles and expressions
   - Update photos regularly

2. **Check Embeddings**
   - Go to person's profile
   - Verify embeddings are computed
   - Recompute if needed

3. **Check Similarity Threshold**
   - Default threshold is 0.95
   - Adjust in advanced settings if needed
   - Lower threshold = more sensitive

### False Positives

**Problem**: Wrong person identified

**Solutions**:

1. **Add Distinguishing Photos**
   - Add photos that highlight differences
   - Ensure photos are unique per person
   - Remove similar photos between profiles

2. **Re-enroll Problematic Profiles**
   - Delete and re-enroll the person
   - Use higher quality photos
   - Ensure good lighting during enrollment

## Battery Issues

### Battery Draining Quickly

**Problem**: Phone battery drains fast when using FeelVision

**Solutions**:

1. **Reduce Usage**
   - Use app only when needed
   - Close app when not in use
   - Don't keep in background

2. **Enable Power Saving**
   - Enable phone's power-saving mode
   - Reduce screen brightness
   - Disable unnecessary features

3. **Optimize Settings**
   - Disable debug mode
   - Reduce capture frequency
   - Use single-shot modes instead of continuous

4. **Use Power Bank**
   - Carry a power bank for extended use
   - Connect phone to power when stationary

### Device Not Charging

**Problem**: Luckfox device not receiving power

**Solutions**:

1. **Check USB Cable**
   - Try different cable
   - Ensure cable supports data transfer
   - Check for cable damage

2. **Check USB Port**
   - Try different USB port
   - Ensure port provides power
   - Some ports are power-only

3. **Check Device**
   - Ensure device is not damaged
   - Check for visible damage
   - Contact support if device is faulty

## Model Download Issues

### Models Won't Download

**Problem**: AI models fail to download

**Solutions**:

1. **Check Internet Connection**
   - Ensure stable internet
   - Try Wi-Fi instead of mobile data
   - Check network speed

2. **Check Storage Space**
   - Ensure at least 1GB free space
   - Clear unnecessary files
   - Use SD card if available

3. **Retry Download**
   - Go to settings
   - Tap "Retry Download"
   - Wait for completion

4. **Download Manually**
   - Download models from website
   - Copy to device storage
   - App will detect them automatically

### Download Stuck

**Problem**: Download progress stuck at percentage

**Solutions**:

1. **Cancel and Retry**
   - Cancel the download
   - Wait a few seconds
   - Start download again

2. **Check Network**
   - Switch between Wi-Fi and mobile data
   - Restart network connection
   - Try different network

3. **Clear Cache**
   - Go to Settings → Apps → FeelVision
   - Tap "Storage"
   - Tap "Clear cache"
   - Retry download

## Advanced Troubleshooting

### Enable Debug Mode

For detailed diagnostics:

1. Go to FeelVision settings
2. Enable "Debug Mode"
3. This provides:
   - Camera preview
   - Inference logs
   - Performance metrics
   - Connection status

### Export Logs

To share logs with support:

1. Enable debug mode
2. Tap the log icon
3. Select "Export logs"
4. Choose save location
5. Share with support

### Factory Reset

As a last resort:

1. Go to Settings → Advanced
2. Tap "Factory Reset"
3. **Warning**: This deletes:
   - All settings
   - Face database
   - Downloaded models
4. Confirm reset
5. Reconfigure from scratch

## Getting Help

### Self-Service Resources

- **FAQ**: Check [Frequently Asked Questions](/pages/faq.html)
- **Documentation**: Browse all documentation
- **GitHub Issues**: Search existing issues

### Contact Support

If you can't resolve the issue:

**Email**: support@feelvision.org

**GitHub**: [github.com/feelvision/feelvision/issues](https://github.com/feelvision/feelvision/issues)

**When contacting support, include**:
- Device model and Android version
- App version
- Detailed description of problem
- Steps to reproduce
- Debug logs (if available)

### Community Support

- **Forum**: community.feelvision.org
- **Discord**: discord.gg/feelvision
- **Reddit**: r/feelvision

---

**Next:** [FAQ](/pages/faq.html)
