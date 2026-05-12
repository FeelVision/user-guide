---
layout: page
title: FAQ
subtitle: Frequently asked questions
previous: /troubleshooting/
previous_title: Troubleshooting
toc: true
---

# Frequently Asked Questions

Common questions about FeelVision, answered.

## General Questions

### What is FeelVision?

FeelVision is a smart glasses system for visually impaired individuals. It consists of a hardware module that attaches to your glasses and an Android app that uses AI to describe your surroundings, read text, recognize faces, and help you navigate.

### How much does FeelVision cost?

The hardware module costs approximately $150-200 depending on the variant. The Android app is free to download. No subscription fees are required.

### Is FeelVision available in my country?

FeelVision ships worldwide. The app is available on Google Play Store globally. Check the shipping information on our website for specific country availability.

### Does FeelVision work with iOS?

Currently, FeelVision only supports Android devices (Android 7.0 and higher). iOS support is planned for future releases.

### Can I use FeelVision without the hardware?

Yes! The app has a "phone camera mode" that uses your phone's camera instead of the hardware module. This is great for testing or if you don't have the hardware yet.

## Hardware Questions

### What glasses work with FeelVision?

FeelVision works with most standard eyeglass frames. For best results:
- Choose frames with sturdy temples (arms)
- Ensure the frame can support ~25g additional weight
- Avoid very delicate or rimless frames
- Frames with adjustable nose pads work best

### How do I attach the module to my glasses?

The module comes with a mounting bracket that clips onto the temple of your glasses. See the [Hardware Setup Guide](/pages/hardware-setup.html) for detailed instructions with diagrams.

### Is the module waterproof?

No, the module is not waterproof. Avoid exposure to water, rain, or excessive moisture. Store in a dry place when not in use.

### How long does the battery last?

The module is powered via USB from your phone. Battery life depends on your phone's battery, but expect 5-10% battery drain per hour of use. Consider a power bank for extended use.

### Can I use the module with a tablet?

Yes, the module works with any Android device that supports USB OTG and runs Android 7.0 or higher, including tablets.

### What if I lose or break the module?

Replacement modules can be purchased from our website. Contact support for warranty claims if the module is defective.

## Software Questions

### What Android version do I need?

FeelVision requires Android 7.0 (API 24) or higher. Android 10+ is recommended for best performance.

### How much storage space does the app need?

The app requires approximately 1GB of storage:
- App: ~50MB
- AI Models: ~500MB
- Face data: Variable (typically 10-50MB)
- Cache: ~100MB

### Do I need internet connection?

You need internet only for:
- Initial app download
- Initial AI model download
- App updates

Once models are downloaded, FeelVision works completely offline.

### Can I use FeelVision with other accessibility apps?

Yes, FeelVision works alongside other accessibility apps like screen readers. However, audio output may conflict if both apps try to speak simultaneously.

### Is my data private?

Yes, all data is stored locally on your device:
- Face data is never uploaded
- No cloud sync by default
- No personal data collection
- Optional crash reporting can be disabled

## Mode-Specific Questions

### Which mode should I use?

- **Default**: General scene description
- **OCR**: Reading text
- **Navigate**: Walking assistance
- **Face**: Recognizing people
- **Currency**: Identifying money
- **Educational**: Learning
- **Narrate**: Detailed scene description

See the [Modes Guide](/pages/modes.html) for detailed information on each mode.

### Can I customize the modes?

Yes, you can customize AI prompts and some mode settings in the app's settings. Advanced users can modify system prompts for different behaviors.

### How accurate is face recognition?

Face recognition is highly accurate when:
- Good lighting conditions
- Person enrolled with multiple photos
- Frontal or near-frontal view
- No significant appearance changes

Accuracy may decrease with:
- Poor lighting
- Extreme angles
- Significant appearance changes
- Obstructed face (mask, sunglasses)

### Can Face Mode recognize people with masks?

Face recognition is less accurate with masks as it covers key facial features. For best results, enroll people both with and without masks.

### How many people can I enroll?

There's no strict limit, but performance may decrease with very large databases (100+ people). For most users, 20-50 people is practical.

### Does OCR work with handwriting?

OCR works best with printed text. Handwriting recognition is limited and may not be accurate for all handwriting styles.

### Can Navigate Mode replace a cane or guide dog?

No, Navigate Mode is an assistive tool, not a replacement for traditional mobility aids. Always use it alongside your cane or guide dog.

### What currencies does Currency Mode support?

Currently supported:
- Indian Rupee (₹)
- US Dollar ($)
- Euro (€)
- British Pound (£)
- Japanese Yen (¥)

More currencies are being added regularly.

## Usage Questions

### How do I switch modes?

Press Button A (short press) to switch to the next mode. Press Button A (long press, 600ms+) to switch to the previous mode. The app announces the current mode.

### What do the buttons do?

- **Button A**: Mode switch (short press = next, long press = previous)
- **Button B**: Capture/Action (short press = capture, long press = repeat last)
- **Button C**: Configurable (default: speak current mode)

### How do I change the language?

Go to Settings → Language and select from:
- English
- Hindi (हिंदी)
- Telugu (తెలుగు)
- Tamil (தமிழ்)
- Kannada (ಕನ್ನಡ)
- Malayalam (മലയാളം)

### Can I adjust the speech speed?

Yes, go to Settings → Speech → Speech Rate and adjust the slider from 0.5x (very slow) to 1.5x (very fast).

### How do I enroll a face?

1. Go to "People" section in the app
2. Tap "Add Person"
3. Enter name and relation
4. Capture 3-5 photos from different angles
5. Save the profile

See the [Face Recognition Guide](/pages/face-recognition.html) for detailed instructions.

### Can I export my face data?

Yes, you can export all profiles from Settings → Backup → Export data. This creates an encrypted backup file.

## Technical Questions

### What AI models does FeelVision use?

FeelVision uses:
- **Gemma 4B**: For general AI inference
- **MediaPipe Blaze Face**: For face detection
- **MobileFaceNet**: For face recognition

### How does the AI work?

The app uses computer vision and natural language processing:
1. Camera captures image
2. AI analyzes the image
3. Text is generated using the Gemma model
4. Text is spoken using Android TTS

### Is the AI always accurate?

No AI is perfect. Accuracy depends on:
- Image quality
- Lighting conditions
- Subject complexity
- Model training

FeelVision is designed to be helpful but may make mistakes. Always use judgment.

### Can I use custom AI models?

Currently, only the provided models are supported. Custom model support may be added in future versions for advanced users.

### How does the USB connection work?

The Luckfox device creates a USB Ethernet connection:
- Device IP: 172.32.0.1 (acts as DHCP server)
- Host IP: 172.32.0.100 (your phone)
- Port: 8065 for TCP communication

## Troubleshooting Questions

### The app won't install. What do I do?

See the [Troubleshooting Guide](/pages/troubleshooting.html#installation-issues) for solutions to installation problems.

### My device isn't connecting. Help!

Check:
- USB cable is properly connected
- Try a different USB cable
- Grant USB permissions to the app
- Restart the app and phone

See [Connection Issues](/pages/troubleshooting.html#connection-issues) for more details.

### I'm not getting any audio. What's wrong?

Check:
- Phone volume is up
- TTS is enabled in settings
- No other app is using audio
- Try different TTS engine

See [Audio Issues](/pages/troubleshooting.html#audio-issues) for more help.

### Face recognition isn't working. Why?

Ensure:
- Person is enrolled with multiple photos
- Good lighting conditions
- Person is facing the camera
- Embeddings are computed (check in profile)

See [Face Recognition Issues](/pages/troubleshooting.html#face-recognition-issues) for detailed troubleshooting.

### The app is slow. How can I speed it up?

Try:
- Closing background apps
- Enabling performance mode in settings
- Reducing image resolution
- Restarting your phone

See [Performance Issues](/pages/troubleshooting.html#performance-issues) for more tips.

## Safety and Legal Questions

### Is FeelVision safe to use?

FeelVision is designed with safety in mind, but:
- Always be aware of your surroundings
- Don't rely solely on the device
- Test in safe environments first
- Use alongside traditional mobility aids
- Don't use in hazardous situations alone

### Can I use FeelVision while driving?

No, FeelVision is not designed for use while driving. It's for walking and stationary use only.

### Is my face data secure?

Yes, face data is stored locally on your device in an encrypted database. It's never uploaded to the cloud unless you explicitly enable cloud backup.

### Can I share my face data with family?

You can export your face database and share it with family members who also use FeelVision. The exported file is encrypted.

### What are the privacy implications?

FeelVision respects your privacy:
- No data collection without consent
- All data stored locally
- Optional crash reporting can be disabled
- No tracking or analytics by default

## Support and Community

### How do I get help?

- **Email**: support@feelvision.org
- **GitHub**: [github.com/feelvision/feelvision/issues](https://github.com/feelvision/feelvision/issues)
- **Forum**: community.feelvision.org
- **Discord**: discord.gg/feelvision

### Is there a user community?

Yes! Join our community at:
- Forum: community.feelvision.org
- Discord: discord.gg/feelvision
- Reddit: r/feelvision

### How do I report a bug?

Report bugs via:
- GitHub Issues: [github.com/feelvision/feelvision/issues](https://github.com/feelvision/feelvision/issues)
- Email: support@feelvision.org

Include:
- Device model and Android version
- App version
- Steps to reproduce
- Debug logs (if available)

### How do I request a feature?

We welcome feature requests! Submit via:
- GitHub Issues (label as "enhancement")
- Community forum
- Email to support@feelvision.org

### Is there a warranty?

Yes, the hardware module comes with a 1-year limited warranty covering manufacturing defects. Contact support for warranty claims.

## Future Development

### What's coming in future updates?

Planned features include:
- iOS support
- Wireless connectivity (Bluetooth/Wi-Fi)
- Emotion recognition
- Age estimation
- On-device learning for faces
- More languages
- More currencies
- Advanced navigation features

### Can I participate in beta testing?

Yes! Join our community and opt-in for beta testing in the app settings.

### How often are updates released?

We aim to release updates every 4-6 weeks with bug fixes and new features. Major updates may take longer.

---

## Still Have Questions?

If your question isn't answered here, please:

1. Check the [documentation](/)
2. Search our [community forum](https://community.feelvision.org)
3. [Contact support](mailto:support@feelvision.org)

We're here to help!
