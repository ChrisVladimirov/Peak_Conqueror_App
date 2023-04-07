import {pictureUrls} from "../../api/constants.js";
import {render, screen, waitFor} from "@testing-library/react";
import {PictureCard} from "./PictureCard";
import {BrowserRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('PictureCard Item Component', function () {
    const testDTO = {
        'url': pictureUrls.FERDINANDOVO_EZERO,
        'title': 'Ferdinandovo ezero',
        'id': 1
    }

    test('Card img should be displayed', () => {
        const testUrl = testDTO.url;

        render(<BrowserRouter>
            <PictureCard
                pictureDTO={testDTO} pictureIndex={1}/>
        </BrowserRouter>);

        waitFor(() => expect(screen.queryByText(testUrl))
            .toBeInTheDocument());
    })

    test('Card title should be displayed', () => {
        const testTitle = testDTO.title;

        render(<BrowserRouter>
            <PictureCard pictureDTO={testDTO} pictureIndex={1}/>
        </BrowserRouter>)

        waitFor(() => expect(screen
            .queryByText(testTitle))
            .toBeInTheDocument())
    })

    test('Card id should be found in the edit url', async () => {
        global.window = {location: {pathname: null}};
        const testId = testDTO.id;

        render(
            <BrowserRouter>
                <PictureCard pictureDTO={testDTO}/>
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Edit'));

        expect(global.window.location.pathname)
            .toContain(`/pictures/${testId}/edit`);
    })
});