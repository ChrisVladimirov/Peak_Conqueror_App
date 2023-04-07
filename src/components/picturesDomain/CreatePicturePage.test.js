import {pictureUrls} from "../../api/constants";
import {render, screen, waitFor} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {CreatePicturePage} from "./CreatePicturePage";

describe('CreatePicturePage tests', function () {
    test('Page background should correspond to the constant url specified in props', () => {

        const urlStr = (pictureUrls.BY_THE_FIRE);

        render(<BrowserRouter>
            <CreatePicturePage data-testid='background-test-id'/>
        </BrowserRouter>);

        waitFor(() => {
            expect(screen.getByTestId('background-test-id'))
                .toHaveStyle(`background-image: url(${urlStr})`)
        })
    })
});