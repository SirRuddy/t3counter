<?php
/**
 * This file is part of the "counter" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

namespace Lavitto\Counter\Utility;

use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Class RenderFlexFormSettingsViewHelper
 *
 * @package Lavitto\Counter\Utility
 */
class FlexFormUtility
{

    /**
     * Returns the FlexFormService
     *
     * @return object
     */
    public static function getFlexFormService()
    {
        if (version_compare(TYPO3_branch, '9.5', '>=')) {
            /** @noinspection ClassConstantCanBeUsedInspection */
            $flexFormServiceClass = 'TYPO3\CMS\Core\Service\FlexFormService';
        } else {
            /** @noinspection ClassConstantCanBeUsedInspection */
            $flexFormServiceClass = 'TYPO3\CMS\Extbase\Service\FlexFormService';
        }
        return GeneralUtility::makeInstance($flexFormServiceClass);
    }
}
