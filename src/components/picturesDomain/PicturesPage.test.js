import {render, screen, waitFor, renderHook} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {PicturesPage} from "./PicturesPage";
import {usePictures} from "../../hooks/usePictures";

describe('PicturesPage (i.e. all pictures) tests', function () {
    test('PicturesPage should display message if empty', () => {
        const pictures = []

        render(<BrowserRouter>
            <PicturesPage pictures={pictures}/>
        </BrowserRouter>)

        const onEmptyMessage = 'Loading pictures...';
        waitFor(() => {
            expect(screen.queryByText(onEmptyMessage))
                .toBeInTheDocument()
        })
    })

    test('PicturesPage should display the pictures collection when not empty', () => {
        const result = renderHook(usePictures).result;

        render(<BrowserRouter>
            <PicturesPage/>
        </BrowserRouter>)

        waitFor(() => {
            expect(result.current.length)
                .toEqual(12)
        })
    })
});