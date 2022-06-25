import React from "react";
import SuiBox from "components/SuiBox";
import { Stack } from "@mui/material";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./productForm.css";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Container from "@mui/material/Container";
import Autocomplete from "@mui/material/Autocomplete";
import TextareaAutosize from "@mui/material/TextareaAutosize";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    productName: data.get("productName"),
    brand: data.get("brand"),
    shop: "this shop",
    metaTitle: data.get("metaTitle"),
    category: data.get("category"),
    ProductType: data.get("ProductType") ? data.get("ProductType") : "Men",
    description:data.get("description"),
    content:data.get("content"),
  });
};

const ProductForm = () => {
  const handleFirstStep = () => {
    document.getElementById("Step-one").classList.add("active-f-color");
    document.getElementById("Step-two").classList.remove("active-f-color");
    document.getElementById("Step-three").classList.remove("active-f-color");

    document.getElementById("p-f-step").classList.remove("none");
    document.getElementById("p-s-step").classList.add("none");
    document.getElementById("p-t-step").classList.add("none");
  };
  const handleSecondStep = () => {
    document.getElementById("Step-one").classList.remove("active-f-color");
    document.getElementById("Step-two").classList.add("active-f-color");
    document.getElementById("Step-three").classList.remove("active-f-color");

    document.getElementById("p-f-step").classList.add("none");
    document.getElementById("p-s-step").classList.remove("none");
    document.getElementById("p-t-step").classList.add("none");
  };
  const handleThirdStep = () => {
    document.getElementById("Step-one").classList.remove("active-f-color");
    document.getElementById("Step-two").classList.remove("active-f-color");
    document.getElementById("Step-three").classList.add("active-f-color");

    document.getElementById("p-f-step").classList.add("none");
    document.getElementById("p-s-step").classList.add("none");
    document.getElementById("p-t-step").classList.remove("none");
  };

  const categories = [{ cat: "shirts" }, { cat: "trousers" }, { cat: "idk" }];
  const productTypes = [{ type: "Men" }, { type: "Women" }];
  return (
    <div>
      <SuiBox p={2}>
        <Stack direction="row" spacing={2} className="productForm">
          <button className="progress-pForm Step-one" id="Step-one" onClick={handleFirstStep}>
            Step One <KeyboardDoubleArrowRightIcon fontSize="large" />
          </button>

          <button className="progress-pForm Step-two" id="Step-two" onClick={handleSecondStep}>
            Step two
            <KeyboardDoubleArrowRightIcon fontSize="large" />
          </button>

          <button className="progress-pForm Step-three" id="Step-three" onClick={handleThirdStep}>
            Step three
            <ModeStandbyIcon fontSize="medium" />{" "}
          </button>
        </Stack>
      </SuiBox>

      <SuiBox p={2}>
        <Stack spacing={2} className="productForm">
          <Container component="main" maxWidth="s">
            <CssBaseline />
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <SuiBox className="p-f-step" id="p-f-step">
                <Box
                  sx={{
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="productName"
                        required
                        fullWidth
                        id="productName"
                        label="Product Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="brand"
                        label="Brand"
                        name="brand"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="metaTitle"
                        label="Meta Title"
                        name="metaTitle"
                        autoComplete="metaTitle"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Autocomplete
                        freeSolo
                        required
                        fullWidth
                        name="category"
                        id="category"
                        options={categories.map((option) => option.cat)}
                        renderInput={(params) => (
                          <TextField name="category" id="category" {...params} label="cat" />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Autocomplete
                        required
                        fullWidth
                        name="ProductType"
                        id="ProductType"
                        options={productTypes.map((option) => option.type)}
                        renderInput={(params) => (
                          <TextField
                            name="ProductType"
                            id="ProductType"
                            {...params}
                            label="Product Type"
                          />
                        )}
                      />
                    </Grid>
                    {/* <Grid item xs={12}>
                      <button
                        className="progress-pForm Step-two"
                        id="Step-two"
                        onClick={handleSecondStep}
                      >
                        Step two
                        <KeyboardDoubleArrowRightIcon fontSize="large" />
                      </button>
                    </Grid> */}
                  </Grid>
                </Box>
              </SuiBox>
              <SuiBox p={2} className="none p-s-step" id="p-s-step">
                <TextareaAutosize
                  aria-label="description"
                  minRows={3}
                  name="description"
                  id="description"
                  placeholder="description"
                  style={{ width: 200 }}
                />
                <TextareaAutosize
                  aria-label="content"
                  minRows={3}
                  name="content"
                  id="content"
                  placeholder="content"
                  style={{ width: 200 }}
                />
              </SuiBox>
              <SuiBox p={2} className="none p-t-step " id="p-t-step">
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  ADD
                </Button>
              </SuiBox>
            </Box>
          </Container>
        </Stack>
      </SuiBox>
    </div>
  );
};

export default ProductForm;
