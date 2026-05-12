---
layout: page
title: Hardware Setup
subtitle: Configure your Luckfox Pico module
previous: /pages/getting-started.html
previous_title: Getting Started
next: /pages/app-installation.html
next_title: App Installation
toc: true
---

# Hardware Setup Guide

This guide covers the physical setup and configuration of the Luckfox Pico hardware module for FeelVision.

## Hardware Components

### What's in the Box

- Luckfox Pico module
- Mounting bracket for glasses
- USB cable (Type-C or Micro-USB)
- Quick start guide

### Technical Specifications

| Component | Specification |
|-----------|---------------|
| **SoC** | Rockchip RV1103/RV1106 |
| **Camera** | 2304x1296 resolution, NV21 format |
| **Storage** | SD Card or SPI NAND support |
| **Connectivity** | USB Ethernet (CDC-ECM) |
| **Buttons** | 3 GPIO-based buttons |
| **Power** | USB-powered (5V) |
| **Dimensions** | 50mm × 30mm × 15mm |
| **Weight** | 25g |

## Mounting the Module

### Choosing Your Glasses

FeelVision is designed to work with most standard eyeglass frames. For best results:

- Choose frames with a sturdy temple (arm)
- Ensure the frame can support the additional weight (~25g)
- Avoid rimless or very delicate frames
- Consider frames with adjustable nose pads for better positioning

### Mounting Steps

1. **Prepare the Mount**
   - Remove the protective film from the mounting bracket
   - Ensure the bracket clips are clean

2. **Position the Module**
   - Place the Luckfox Pico module on the bracket
   - Align the camera lens to face forward
   - Ensure the USB port is accessible

3. **Attach to Glasses**
   - Open the bracket clips
   - Slide the bracket onto the right temple of your glasses
   - Position it 2-3cm from the hinge
   - Secure the clips firmly

4. **Adjust Camera Angle**
   - The camera should point slightly downward (10-15°)
   - This provides the best field of view for daily use
   - Test the angle by checking what the camera sees

### Mounting Diagram

```
┌─────────────────────────────────────┐
│                                     │
│         ┌─────────────┐             │
│         │   LENS      │  ← Camera   │
│         └─────────────┘             │
│              │                       │
│         ┌────▼────┐                  │
│         │  MODULE │                  │
│         │ Luckfox │                  │
│         └────┬────┘                  │
│              │                       │
│         ┌────▼────┐                  │
│         │  MOUNT  │  ← Bracket      │
│         └────┬────┘                  │
│              │                       │
│    ┌─────────▼─────────┐            │
│    │    GLASSES FRAME   │            │
│    └───────────────────┘            │
│                                     │
└─────────────────────────────────────┘
```

## Button Configuration

### Default Button Layout

| Button | Location | Default Function |
|--------|----------|------------------|
| **A** | Top | Mode switch (next) |
| **B** | Middle | Capture/Action |
| **C** | Bottom | Configurable |

### Button Accessibility

- Buttons are tactile with distinct shapes
- Button A: Small circular button
- Button B: Large oval button (primary)
- Button C: Medium rectangular button

### Customizing Buttons

You can customize button functions in the app settings:

1. Open FeelVision app
2. Go to Settings → Button Configuration
3. Select the button you want to customize
4. Choose from available functions:
   - Mode switch
   - Capture
   - Repeat last
   - Toggle debug mode
   - Speak current mode
   - Emergency alert

## USB Connection

### Connecting to Your Device

1. **Choose the Right Cable**
   - Use the cable provided with the module
   - Ensure it matches your device's port (Type-C or Micro-USB)
   - Use a high-quality cable for stable connection

2. **Connect the Module**
   - Plug one end into the Luckfox Pico USB port
   - Plug the other end into your Android device
   - Ensure both connections are secure

3. **Verify Connection**
   - The app will automatically detect the device
   - You'll hear a confirmation sound
   - Status indicator shows "Connected"

### Connection Troubleshooting

| Problem | Solution |
|---------|----------|
| Device not detected | Try a different USB cable |
| Intermittent connection | Check cable for damage |
| No power to module | Ensure USB port provides power |
| App doesn't recognize | Check USB device permissions |

## Power Management

### Power Sources

The Luckfox Pico is powered via USB:

- **Direct USB**: Connected to phone (uses phone battery)
- **Power bank**: For extended use without draining phone
- **Wall charger**: When stationary (e.g., at desk)

### Battery Considerations

- Module draws ~500mA when active
- Phone battery impact: ~5-10% per hour of use
- Consider a power bank for extended outings
- Close the app when not in use to save power

### Power-Saving Tips

1. **Reduce Capture Frequency**
   - Only capture when needed
   - Use continuous modes sparingly

2. **Optimize Settings**
   - Disable debug mode
   - Reduce screen brightness
   - Use power-saving mode on phone

3. **Manage Connection**
   - Disconnect when not in use
   - Use airplane mode if not needing network

## Camera Calibration

### Auto-Focus and Exposure

The Luckfox Pico uses RKAIQ 3A server for automatic camera adjustment:

- **Auto-Exposure**: Adjusts to lighting conditions
- **Auto-Focus**: Maintains sharp focus
- **Auto White-Balance**: Ensures accurate colors

### Manual Adjustments

If you need manual control:

1. Connect via SSH to the Luckfox device
2. Use v4l2-ctl commands:
   ```bash
   v4l2-ctl -d /dev/video11 --set-ctrl exposure_auto=1
   v4l2-ctl -d /dev/video11 --set-ctrl focus_auto=1
   ```

### Camera Maintenance

- Keep the lens clean with a microfiber cloth
- Avoid touching the lens with fingers
- Store in a protective case when not in use
- Check for dust buildup regularly

## Advanced Configuration

### Accessing Luckfox Pico Terminal

For advanced users, you can access the device terminal:

1. Enable ADB on your Android device
2. Connect via USB
3. Use ADB to access the device:
   ```bash
   adb shell
   ```

### Network Configuration

The device uses a custom network setup:

- **Device IP**: 172.32.0.1 (acts as DHCP server)
- **Host IP**: 172.32.0.100 (your Android device)
- **Port**: 8065 (TCP communication)

### Updating Firmware

To update the Luckfox Pico firmware:

1. Download the latest firmware from the repository
2. Copy to the device's storage
3. Use the update script:
   ```bash
   ./rkflash.sh
   ```

## Safety and Care

### Physical Safety

- Don't expose to extreme temperatures
- Avoid dropping or impact
- Keep away from water and moisture
- Don't disassemble the module

### Electrical Safety

- Use only provided USB cable
- Don't use damaged cables
- Disconnect before cleaning
- Don't expose to liquids

### Storage

- Store in the provided case
- Keep in a cool, dry place
- Avoid direct sunlight
- Remove batteries if storing long-term

## Warranty and Support

### Warranty Coverage

- 1-year limited warranty
- Covers manufacturing defects
- Does not cover physical damage
- Contact support for claims

### Getting Help

- Email: support@feelvision.org
- GitHub Issues: [github.com/yourusername/feelvision/issues](https://github.com/yourusername/feelvision/issues)
- Documentation: [docs.feelvision.org](https://docs.feelvision.org)

---

**Next:** [App Installation Guide](/pages/app-installation.html)
