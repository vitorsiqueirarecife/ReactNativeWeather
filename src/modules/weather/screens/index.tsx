import React, {useEffect} from 'react';
import useLocation from '../hooks/useLocation';
import useWeather from '../hooks/useWeather/useWeather';
import CardTitle from '../../../components/CardTitle';
import CardContent from '../../../components/CardContent';
import Title from '../../../components/Title';
import Content from '../../../components/Content';
import SafeArea from '../../../components/SafeArea';
import Button from '../../../components/Button';
import {ActivityIndicator} from 'react-native';

const Weather = () => {
  const {loadPosition, coordenates, loading: loadingLocation} = useLocation();
  const {getWeather, informations, loading: loadingWeather} = useWeather();

  useEffect(() => {
    const run = async () => {
      await loadPosition();
    };
    run();
  }, []);

  useEffect(() => {
    const run = async () => {
      await getWeather(coordenates?.latitude, coordenates?.longitude);
    };
    run();
  }, [coordenates]);

  return (
    <SafeArea>
      {informations && !loadingLocation && !loadingWeather ? (
        <>
          <CardTitle>
            <Title>Location</Title>
          </CardTitle>
          <CardContent>
            <Content>{`${informations?.city} - ${informations?.country}`}</Content>
          </CardContent>
          <CardTitle>
            <Title>Weather</Title>
          </CardTitle>
          <CardContent>
            {informations && (
              <>
                <Content>{`${informations?.temperature} graus celsius (${informations?.description})`}</Content>
                <Content>{`Humidity: ${informations?.humidity}`}</Content>
                <Content>{`Pressure: ${informations?.pressure}`}</Content>
              </>
            )}
          </CardContent>
        </>
      ) : (
        <ActivityIndicator color="#8c87d4" size="large" />
      )}

      <Button
        onPress={() => {
          getWeather(coordenates?.latitude, coordenates?.longitude);
        }}>
        Refresh
      </Button>
    </SafeArea>
  );
};

export default Weather;
