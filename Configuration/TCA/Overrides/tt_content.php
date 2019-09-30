<?php
/**
 * This file is part of the "counter" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

/** @noinspection PhpFullyQualifiedNameUsageInspection */
defined('TYPO3_MODE') or die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    [
        'LLL:EXT:counter/Resources/Private/Language/Tca.xlf:counter_counter',
        'counter_counter',
        'EXT:counter/Resources/Public/Icons/ContentElements/counter_counter.svg'
    ],
    'CType',
    'counter'
);

$GLOBALS['TCA']['tt_content']['palettes']['counter_counter'] = [
    'label' => 'LLL:EXT:counter/Resources/Private/Language/Tca.xlf:counter_counter',
    'showitem' => 'pi_flexform;LLL:EXT:counter/Resources/Private/Language/Tca.xlf:tt_content.counter_counter.pi_flexform'
];

$GLOBALS['TCA']['tt_content']['columns']['pi_flexform']['config']['ds']['*,counter_counter'] = 'FILE:EXT:counter/Configuration/FlexForm/Counter.xml';
$GLOBALS['TCA']['tt_content']['types']['counter_counter'] = [
    'showitem' => '
    --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
        --palette--;;general,
        --palette--;;headers,
        --palette--;;counter_counter,
    --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
        --palette--;;frames,
        --palette--;;appearanceLinks,
    --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
        --palette--;;language,
    --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
        --palette--;;hidden,
        --palette--;;access,
    --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories,
        categories,
    --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes,
        rowDescription,
    --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended,'
];
