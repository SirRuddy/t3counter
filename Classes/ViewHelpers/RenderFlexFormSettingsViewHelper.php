<?php
/**
 * This file is part of the "counter" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

namespace Lavitto\Counter\ViewHelpers;

use Lavitto\Counter\Utility\FlexFormUtility;
use TYPO3Fluid\Fluid\Core\Exception;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * Class RenderFlexFormSettingsViewHelper
 *
 * @package Lavitto\Counter\ViewHelpers
 */
class RenderFlexFormSettingsViewHelper extends AbstractViewHelper
{

    /**
     * Initialize arguments.
     *
     * @return void
     */
    public function initializeArguments(): void
    {
        $this->registerArgument(
            'flexform',
            'string',
            'The flexform-xml of the content element',
            true
        );
        $this->registerArgument(
            'defaultSettings',
            'array',
            'Default settings array',
            true
        );
    }

    /**
     * Returns the value of a flexform option
     *
     * @return array
     * @throws Exception
     */
    public function render(): array
    {
        $flexFormArray = [];
        $flexFormContent = $this->arguments['flexform'] ?? null;
        $defaultSettings = $this->arguments['defaultSettings'] ?? [];
        if ($flexFormContent !== null) {
            $flexFormArray = FlexFormUtility::getFlexFormService()->convertFlexFormContentToArray($flexFormContent);
        }
        return array_merge($defaultSettings, $flexFormArray);
    }
}
