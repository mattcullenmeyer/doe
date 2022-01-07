import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { School, searchSchools } from '../services/searchSchools';

export const AutocompleteSearch: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<School[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const timeout: { current: NodeJS.Timeout | null } = useRef(null);

  const history = useHistory();

  const setData = async () => {
    setLoading(true);
    setOptions([]);
    // clearTimeout(timeout.current as NodeJS.Timeout);
    // timeout.current = setTimeout( async () => {
      // await new Promise(r => setTimeout(r, 1000));
      const response = await searchSchools({ searchTerm: inputValue });
      if (response.status === 200 && response.data) {
        setOptions(response.data);
        setLoading(false);
      }
    // }, 100);
  };

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    if (!inputValue) {
      setOptions([]);
    }
    if (inputValue) {
      setData();
    }
  }, [inputValue]);
  
  return (
    <Autocomplete
      id="school-search"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      sx={{ width: 300 }}
      filterOptions={(x) => x}
      inputValue={inputValue}
      onInputChange={(_, value) => {
        setInputValue(value);
      }}
      onChange={(_, value) => {
        if (value) {
          history.push(`/ratings/${value.slug}`);
        }
      }}
      clearOnBlur={true}
      clearOnEscape={true}
      autoHighlight={true}
      loading={loading}
      size='small'

      renderInput={(params) => (
        <TextField 
          {...params} 
          label="Search Schools" 
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
    />
  );
};