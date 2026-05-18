---
layout: default
title: Welcome to FeelVision
subtitle: Smart glasses for visually impaired individuals
---

# Welcome to FeelVision

FeelVision is smart glasses system designed to empower visually impaired individuals by providing real-time environmental awareness through AI-powered assistance. 

Our attachable hardware module works with your Android device to describe the world around you, read text, recognize faces, and help you navigate safely.

For user documentation refer to [User Guide](https://feelvision.github.io/user-guide/)

For Luckfox Firmware refer to [Luckfox Feelvision Firmware](https://github.com/FeelVision/Luckfox-firmware)

For Building Android App from source refer to [Feelvision Android](https://github.com/FeelVision/Feelvision-Android/) 

3D print the Hardware files from: [Hardware Design Files](https://github.com/FeelVision/Hardware-Design-Files)

BOM: Luckfox Pico Mini B, SC3336 Camera Module, Jumper wires, Soldering Iron, USB Type C to Type C Data cable.

<iframe width="560" height="315"
src="https://www.youtube.com/embed/2uHmmJZTXpw"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>


<style>
.media-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.media-item {
  width: calc(50% - 10px);
}

.media-item video,
.media-item img {
  width: 100%;
  border-radius: 8px;
}
</style>

# Demo Videos

## Luckfox Demo
<div class="media-grid">

<div class="media-item">
    <h3>Navigation Mode</h3>
    <video controls>
  <source src="assets/images/screenshots/luckfox-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
    </video>
  </div>


<div class="media-item">
    <h3>Navigation Mode</h3>
    <video controls>
      <source src="assets/images/screenshots/navigation-mode.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

---

## Smart Glasses with Clip on Module
<img src="assets/images/modes/smartglass_with_clipon_module.jpeg" width="100%" alt="App Preview 1" />


## Demos

<div class="media-grid">

  
  <div class="media-item">
    <h3>Navigation Android</h3>
    <video controls>
      <source src="assets/images/screenshots/navigation-android.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="media-item">
    <h3>OCR and Face Recognition Demo</h3>
    <video controls>
      <source src="assets/images/screenshots/ocr-face-demo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>


</div>

---

## Android App

<div class="media-grid">

  <div class="media-item">
    <h3>Education Mode</h3>
    <img src="assets/images/modes/android_app_edu_mode.jpeg" alt="Education Mode" />
  </div>

  <div class="media-item">
    <h3>Settings Page</h3>
    <img src="assets/images/modes/android_app_settings.jpeg" alt="Settings Page" />
  </div>

</div>

---

## Hardware Design

<div class="media-grid">

  <div class="media-item">
    <img src="assets/images/hardware/image1.jpeg" alt="Hardware Preview 1" />
  </div>

  <div class="media-item">
    <img src="assets/images/hardware/image2.jpeg" alt="Hardware Preview 2" />
  </div>

</div>
## Introduction

<img src="assets/images/setup/image1.png" width="100%" alt="App Preview 1" />
<img src="assets/images/setup/image2.png" width="100%" alt="App Preview 2" />
<img src="assets/images/setup/image3.png" width="100%" alt="App Preview 3" />
<img src="assets/images/setup/image4.png" width="100%" alt="App Preview 4" />
<img src="assets/images/setup/image5.png" width="100%" alt="App Preview 5" />

## Quick Start

<div class="quick-start-cards">
    <div class="card">
        <div class="card-icon">
            <i class="fas fa-download"></i>
        </div>
        <h3>1. Install App</h3>
        <p>Download the FeelVision Android app from the Play Store or build from source.</p>
        <a href="app-installation" class="card-link">Install Guide →</a>
    </div>

    <div class="card">
        <div class="card-icon">
            <i class="fas fa-microchip"></i>
        </div>
        <h3>2. Connect Hardware</h3>
        <p>Attach the Luckfox Pico module to your glasses and connect via USB.</p>
        <a href="hardware-setup" class="card-link">Setup Guide →</a>
    </div>

    <div class="card">
        <div class="card-icon">
            <i class="fas fa-rocket"></i>
        </div>
        <h3>3. Start Using</h3>
        <p>Press the capture button to hear descriptions of your surroundings.</p>
        <a href="getting-started" class="card-link">Get Started →</a>
    </div>
</div>

## Key Features

### 🎯 Seven Specialized Modes

FeelVision offers seven different modes optimized for specific tasks:

- **Default Mode**: General scene description
- **OCR Mode**: Read text from signs, documents, and labels
- **Navigate Mode**: Obstacle detection and navigation assistance
- **Face Mode**: Recognize known people and identify strangers
- **Currency Mode**: Identify currency notes
- **Educational Mode**: Learn about objects and read educational content
- **Narrate Mode**: Detailed scene narration

### 🌍 Multi-Language Support

Native support for:
- English
- Hindi (हिंदी)
- Telugu (తెలుగు)
- Tamil (தமிழ்)
- Kannada (ಕನ್ನಡ)
- Malayalam (മലയാളം)

### 🧠 AI-Powered

- Real-time AI inference using Google Gemma model
- Streaming responses for immediate feedback
- Face recognition with MediaPipe and MobileFaceNet
- Offline capability - no constant internet needed

### ♿ Accessibility First

- Audio-first interaction design
- Physical buttons for tactile feedback
- Simple, intuitive controls
- Minimal learning curve

## System Requirements

### Hardware
- Android device running Android 7.0 (API 24) or higher
- Luckfox Pico hardware module
- USB cable for device connection
- Pair of glasses (any standard frame)

### Software
- FeelVision Android app
- 2GB+ RAM recommended
- 500MB free storage for AI models
- Camera permission
- USB device permission

## How It Works

```mermaid
graph LR
    A[Press Button] --> B[Camera Captures Image]
    B --> C[Image Sent to Android Device]
    C --> D[AI Processes Image]
    D --> E[Text Generated]
    E --> F[TTS Speaks Result]
    F --> G[User Hears Description]
```

## What Users Say

> "FeelVision has given me independence I never thought possible. I can now navigate unfamiliar places with confidence and recognize friends without asking for help."

> "The face recognition feature is incredible. I can finally know who's in the room without feeling awkward. The currency detection has made shopping so much easier."

> "The multi-language support is amazing. I can use it in my native language, which makes it feel much more natural and comfortable."

## Get Started Today

Ready to experience FeelVision? Follow our comprehensive guides to set up your device and start exploring the world with new confidence.

<div class="cta-buttons">
    <a href="/getting-started/" class="btn btn-primary">
        <i class="fas fa-rocket"></i>
        Get Started
    </a>
    <a href="/modes/" class="btn btn-secondary">
        <i class="fas fa-th-large"></i>
        Explore Modes
    </a>
</div>

---

## Need Help?

- Check our [Troubleshooting](/troubleshooting/) guide for common issues
- Visit our [FAQ](/faq/) for frequently asked questions
- Contact support- Email: support@feelvision.org
- GitHub Issues: [github.com/feelvision/feelvision/issues](https://github.com/feelvision/feelvision/issues)
