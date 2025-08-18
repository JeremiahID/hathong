    useEffect(() => {
        const firstDress = prefallFirstDress.current;
        if (!firstDress) return;

        // Set initial color if not set
        if (!firstDress.style.backgroundColor) {
            firstDress.style.backgroundColor = "#B8B8B8";
        }

        const handleFirstDress = () => {
            // Compare using rgb format since JS may convert hex to rgb
            const currentColor = firstDress.style.backgroundColor;
            if (currentColor === "rgb(184, 184, 184)" || currentColor === "#B8B8B8") {
                firstDress.style.backgroundColor = "#1f1919ff";
            } else {
                firstDress.style.backgroundColor = "#B8B8B8";
            }
        };
        firstDress.addEventListener('mouseover', handleFirstDress);
        return () => {
            firstDress.removeEventListener('mouseover', handleFirstDress);
        };
    }, []);