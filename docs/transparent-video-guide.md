# Transparent Video Guide

This guide explains how to create and use transparent videos in our project for cross-browser compatibility.

## Overview

Our project uses transparent videos for UI elements. To ensure compatibility across browsers, we need to provide two formats:

1. **WebM with alpha transparency** - for Chrome, Firefox, Edge
2. **HEVC with alpha transparency** - for Safari (iOS 13+ and macOS 13+)

## Creating Transparent Videos

### Prerequisites

- [FFmpeg](https://ffmpeg.org/) installed on your computer
- For HEVC: Access to a Mac with macOS Catalina or later

### Step 1: Prepare your source material

You should have your video with transparency as either:

- A series of PNG images with alpha transparency
- A video with alpha channel (e.g., ProRes 4444)

### Step 2: Create WebM with transparency

Using FFmpeg, convert your source material to WebM with VP9 codec:

```bash
# If you have a sequence of PNG images (e.g., frame001.png, frame002.png, etc.):
ffmpeg -framerate 30 -i frame%03d.png -c:v libvpx-vp9 -pix_fmt yuva420p output.webm

# If you have a ProRes video with alpha:
ffmpeg -i input.mov -c:v libvpx-vp9 -pix_fmt yuva420p output.webm
```

Options explained:

- `-framerate 30`: Sets the frame rate (adjust as needed)
- `-c:v libvpx-vp9`: Uses the VP9 codec which supports alpha transparency
- `-pix_fmt yuva420p`: Specifies a pixel format with alpha channel

### Step 3: Create HEVC with transparency (for Safari)

#### First, convert to ProRes 4444 if not already in that format:

```bash
# From PNG sequence:
ffmpeg -framerate 30 -i frame%03d.png -c:v prores_ks -profile:v 4444 -alpha_bits 16 -pix_fmt yuva444p10le intermediate.mov
```

#### Then, on a Mac:

1. Open Finder
2. Select the ProRes 4444 video
3. Right-click and select "Encode Selected Video Files"
4. Choose "HEVC" as the output format
5. Check "Preserve transparency" option
6. Click "Continue" to create the HEVC version

## Implementation in our project

Our project automatically detects the browser and serves the appropriate format:

1. For Safari on iOS 13+/macOS 13+: `.mov` files with HEVC + alpha
2. For all other browsers: `.webm` files with VP9 + alpha

### File Structure

For each transparent video in the project, provide both formats:

```
/public/banner/new/
  ├── video-name.webm  # For Chrome, Firefox, Edge
  └── video-name.mov   # For Safari
```

## Fallbacks

For browsers that don't support either format (e.g., older browsers):

1. Consider using a non-transparent fallback video
2. Or hide the video element and show a static image instead

## Resources

- [Overlaying Video With Transparency (CSS-Tricks)](https://css-tricks.com/overlaying-video-with-transparency-while-wrangling-cross-browser-support/)
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [WWDC 2019: HEVC Video with Alpha](https://developer.apple.com/videos/play/wwdc2019/506/)
