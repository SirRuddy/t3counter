<?php
/**
 * This file is part of the "counter" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

defined('TYPO3_MODE') or die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'counter',
    'Configuration/TypoScript',
    'Counter'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'counter',
    'Configuration/TypoScript/Css',
    'Counter CSS (optional, only recommended if Bootstrap 4 is not used)'
);
