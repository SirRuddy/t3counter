# TYPO3 Extension `Animated Counter`

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg?style=for-the-badge)](https://paypal.me/pmlavitto)
[![Latest Stable Version](https://img.shields.io/packagist/v/lavitto/typo3-counter?style=for-the-badge)](https://packagist.org/packages/lavitto/typo3-counter)
[![TYPO3](https://img.shields.io/badge/TYPO3-counter-%23f49700?style=for-the-badge)](https://extensions.typo3.org/extension/counter/)
[![License](https://img.shields.io/packagist/l/lavitto/typo3-counter?style=for-the-badge)](https://packagist.org/packages/lavitto/typo3-counter)

> This extension adds an animated counter content element to your TYPO3 website.

- **Demo**: [www.lavitto.ch/typo3-ext-counter](https://www.lavitto.ch/typo3-ext-counter)
- **Gitlab Repository**: [gitlab.com/lavitto/typo3-counter](https://gitlab.com/lavitto/typo3-counter)
- **TYPO3 Extension Repository**: [extensions.typo3.org/extension/counter](https://extensions.typo3.org/extension/counter/)
- **Found an issue?**: [gitlab.com/lavitto/typo3-counter/issues](https://gitlab.com/lavitto/typo3-counter/issues)

## 1. Introduction

### Features

- Based on extbase & fluid
- Simple and fast installation
- No configuration needed

### Best practice

- The html-code is optimized for Bootstrap v4.3

## 2. Installation

### Installation using Composer

The recommended way to install the extension is by using [Composer](https://getcomposer.org/). In your Composer based 
TYPO3 project root, just do `composer req lavitto/typo3-counter`.

### Installation from TYPO3 Extension Repository (TER)

Download and install the extension `counter` with the extension manager module.

## 3. Minimal setup

1)  Include the static TypoScript of the extension.
2)  Include the static TypoScript (CSS) of the extension. **OPTIONAL**, if Bootstrap is not available on your website. 
3)  Create a counter content element on a page

## 4. Administration

### Create content element

1)  Create a new content element and select "Animated Counter"
2)  Define all the start- and end-numbers and save the content element

## 5. Configuration

### Content-Element Settings

#### General
* First number: The counter begins with this number
* Last numer: This counter stops with this number

#### Appearance
* Duration (seconds): The full duration of the counter-animation in seconds
* Start delay (seconds): The delay time before the counter starts after the page is fully loaded and ready
* Start effect: Enable/disable fadeIn-Animation when the counter starts
* Effect/easing: Speed and easing of the counter-animation (for example "Slow end" count faster at the start and slow down to the end)

#### Title/Description
Additional Texts below the number.

### Constants

| Property           | Description                                    | Type      | Default value   |
| ------------------ | ---------------------------------------------- | --------- | --------------- |
| enableJquery       | Includes jQuery to the page                    | boolean   | false           |
| enableJqueryUi     | Includes jQuery UI to the page                 | boolean   | false           |

## 6. Contribute

Please create an issue at https://gitlab.com/lavitto/typo3-counter/issues.

**Please use GitLab only for bug-reports or feature-requests. For support use the TYPO3 community channels or contact us by email.**

## 7. Support

If you need private or personal support, contact us by email on [info@lavitto.ch](mailto:info@lavitto.ch). 

**Be aware that this support might not be free!**
