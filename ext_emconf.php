<?php
/**
 * This file is part of the "counter" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

/**
 * Extension Manager/Repository config file for ext "counter".
 */

/** @noinspection PhpUndefinedVariableInspection */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Animated Counter',
    'description' => 'Adds an animated counter content element to the website.',
    'category' => 'plugin',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-10.4.99',
            'php' => '7.1.0-7.4.99'
        ],
        'conflicts' => [],
        'suggests' => [
        ]
    ],
    'autoload' => [
        'psr-4' => [
            'Lavitto\\Counter\\' => 'Classes'
        ],
    ],
    'state' => 'beta',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'author' => 'Philipp Mueller',
    'author_email' => 'philipp.mueller@lavitto.ch',
    'author_company' => 'lavitto ag',
    'version' => '1.0.0',
];
